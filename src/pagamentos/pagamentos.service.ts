import {
  Injectable,
  Logger,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MercadoPagoService } from "./mercadopago/mercadopago.service";
import { Preference } from "mercadopago";
import { PagarMercadoPagoDto } from "./dto/pagar-mercadopago.dto";

@Injectable()
export class PagamentosService {
  private readonly logger = new Logger(PagamentosService.name);
  // private readonly preference: Preference;

  constructor(
    private readonly prisma: PrismaService,
    private readonly mercadoPagoService: MercadoPagoService,
  ) {}

  async pagarComCartao(dto: PagarMercadoPagoDto) {
    // 🔐 MODO CONTINGÊNCIA TEMPORÁRIO
    if (process.env.MODO_PDVMVP === "true") {
      await this.prisma.pedido.update({
        where: { id: dto.pedidoId },
        data: {
          status: "PAGO",
          metodoPagamento: "MERCADOPAGO",
        },
      });

      return {
        status: "approved",
        id: "SIMULADO",
        transaction_amount: dto.valor,
      };
    }

    // fluxo real depois
    return this.mercadoPagoService.pagarComCartao(dto);
  }

  async processarWebhookMercadoPago(body: any) {
    if (body.type !== "payment") return;

    const paymentId = body.data?.id;
    if (!paymentId) return;

    const payment = await this.mercadoPagoService.buscarPagamentoPorId(
      paymentId.toString(),
    );

    if (!payment?.id) {
      this.logger.warn("Pagamento inválido", payment);
      return;
    }

    const mpId = payment.id.toString();
    const pedidoId = Number(payment?.external_reference);
    if (!pedidoId) return;

    await this.prisma.$transaction(async (tx) => {
      const existente = await tx.pagamento.findFirst({
        where: { codigoExterno: mpId },
      });

      if (!existente) {
        await tx.pagamento.create({
          data: {
            pedidoId,
            forma: "MERCADOPAGO",
            valor: Number(payment?.transaction_amount),
            status: payment?.status === "approved" ? "PAGO" : "PENDENTE",
            parcelas: payment?.installments ?? 1,
            descricao: "Pagamento Mercado Pago (webhook)",
            codigoExterno: mpId,
          },
        });
      } else {
        await tx.pagamento.update({
          where: { id: existente.id },
          data: {
            status: payment?.status === "approved" ? "PAGO" : "PENDENTE",
          },
        });
      }

      if (payment.status === "approved") {
        await tx.pedido.update({
          where: { id: pedidoId },
          data: {
            status: "PAGO",
            metodoPagamento: "MERCADOPAGO",
          },
        });
      }
    });
  }

  async criarCheckoutMercadoPago(pedidoId: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id: pedidoId },
      include: {
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });

    if (!pedido) {
      throw new BadRequestException("Pedido não encontrado");
    }

    if (
      pedido.status !== "PENDENTE" &&
      pedido.status !== "AGUARDANDO_PAGAMENTO"
    ) {
      throw new BadRequestException("Pedido inválido");
    }

    if (!pedido.itens || pedido.itens.length === 0) {
      throw new BadRequestException("Pedido sem itens");
    }

    return this.mercadoPagoService.criarCheckoutMercadoPago(pedido);
  }

  async verificarStatusPix(txid: string) {
    const pagamento = await this.prisma.pagamento.findFirst({
      where: { pixTxid: txid },
    });

    if (!pagamento) {
      throw new NotFoundException("Pagamento não encontrado");
    }

    console.log("📌 Status atual no banco:", pagamento.status);
    if (pagamento.status !== "PAGO") {
       console.log("⚡ Chamando simularPixPago...");
      await this.simularPixPago(txid);
    }

    const Atualizado = await this.prisma.pagamento.findFirst({
      where: { pixTxid: txid },
    });

    console.log("✅ Status depois da verificação:", Atualizado?.status);
    return {
      status: Atualizado?.status,
      pedidoId: Atualizado?.pedidoId,
      valor: Atualizado?.valor,
    };
  }

  // async verificarStatusPix(txid: string) {
  //   const pagamento = await this.prisma.pagamento.findFirst({
  //     where: { pixTxid: txid },
  //     include: { pedido: true },
  //   });

  //   if (!pagamento) {
  //     throw new NotFoundException("Pagamento não encontrado");
  //   }

  //   return {
  //     status: pagamento.status,
  //     pedidoId: pagamento.pedidoId,
  //     valor: pagamento.valor,
  //   };
  // }

  async processarWebhookMP(evento: any) {
    const txid = evento?.data?.id || evento?.txid;

    const pagamento = await this.prisma.pagamento.findFirst({
      where: { pixTxid: txid },
    });

    if (!pagamento) return { ok: true };

    if (evento.action === "payment.updated") {
      await this.confirmarPagamento(pagamento.id);
    }

    return { ok: true };
  }

  async confirmarPagamento(pagamentoId: number) {
    return this.prisma.$transaction(async (tx) => {
      const pagamento = await tx.pagamento.findUnique({
        where: { id: pagamentoId },
        include: {
          pedido: {
            include: { itens: true },
          },
        },
      });

      if (!pagamento) {
        throw new BadRequestException("Pagamento não encontrado");
      }

      // 1. Atualiza pagamento
      await tx.pagamento.update({
        where: { id: pagamentoId },
        data: {
          status: "PAGO",
          pixStatus: "PAGO",
        },
      });

      // 2. Atualiza pedido
      await tx.pedido.update({
        where: { id: pagamento.pedidoId },
        data: {
          status: "PAGO",
        },
      });

      // 3. BAIXA ESTOQUE USANDO TX 👇
      for (const item of pagamento.pedido.itens) {
        await tx.produto.update({
          where: { id: item.produtoId },
          data: {
            estoque: {
              decrement: item.quantidade,
            },
          },
        });
      }

      return { ok: true };
    });
  }

  async simularPixPago(txid: string) {
    return this.prisma.$transaction(async (tx) => {
      const pagamento = await tx.pagamento.findFirst({
        where: { pixTxid: txid },
        include: {
          pedido: {
            include: { itens: true },
          },
        },
      });

      if (!pagamento) {
        throw new BadRequestException("Pagamento não encontrado");
      }

      // 1) Atualiza pagamento
      await tx.pagamento.update({
        where: { id: pagamento.id },
        data: {
          status: "PAGO",
          pixStatus: "PAGO",
        },
      });

      // 2) Atualiza pedido
      await tx.pedido.update({
        where: { id: pagamento.pedidoId },
        data: {
          status: "FINALIZADO",
        },
      });

      // 3) BAIXA ESTOQUE
      for (const item of pagamento.pedido.itens) {
        await tx.produto.update({
          where: { id: item.produtoId },
          data: {
            estoque: { decrement: item.quantidade },
          },
        });
      }

      // 4) Simula gaveta
      this.abrirGaveta();

      return {
        ok: true,
        pedido: pagamento.pedido,
      };
    });
  }

  private abrirGaveta() {
    console.log("🔓 GAVETA ABERTA (SIMULADO)");
  }
}
