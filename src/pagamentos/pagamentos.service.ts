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
import { Prisma } from "@prisma/client";
import { PEDIDO_STATUS } from "../common/enums/pedido-status.enum";

import PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class PagamentosService {
  private readonly logger = new Logger(PagamentosService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mercadoPagoService: MercadoPagoService,
  ) {}

  async atualizarStatusPedido(
    pedidoId: number,
    novoStatus: string,
    empresaId: number,
    metodoPagamento?: string,
  ) {
    await this.prisma.pedido.update({
      where: { id: pedidoId },
      data: {
        status: novoStatus,
        ...(metodoPagamento && { metodoPagamento }),
        updatedAt: new Date(),
      },
    });

    await this.prisma.pedidoStatus.create({
      data: {
        pedidoId,
        status: novoStatus,
        dataStatus: new Date(),
        empresaId,
      },
    });

    console.log(`📦 Pedido ${pedidoId} atualizado para status: ${novoStatus}`);
  }

  async pagarComCartao(dto: PagarMercadoPagoDto) {
    if (process.env.MODO_PDVMVP === "true") {
      const pedido = await this.prisma.pedido.findUnique({
        where: { id: dto.pedidoId },
      });

      if (!pedido || !pedido.empresaId) {
        throw new BadRequestException("Pedido não encontrado");
      }

      await this.atualizarStatusPedido(
        dto.pedidoId as number,
        PEDIDO_STATUS.PAGO,
        pedido.empresaId,
        "MERCADOPAGO",
      );

      return {
        status: "approved",
        id: "SIMULADO",
        transaction_amount: dto.valor,
      };
    }

    // fluxo real depois
    return this.mercadoPagoService.pagarComCartao(dto);
  }

  async criarPix(pedidoId: number, user: any) {
    console.log("🧠 PEDIDO ID PIX:", pedidoId);

    if (!pedidoId || isNaN(pedidoId)) {
      throw new Error("pedidoId inválido");
    }

    const pedido = await this.prisma.pedido.findFirst({
      where: {
        id: pedidoId,
        empresaId: user.empresaId,
      },
    });

    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }

    console.log("🧠 PEDIDO ENCONTRADO:", pedido);

    await this.prisma.pagamento.create({
      data: {
        pedidoId,
        valor: pedido.valorTotal,
        forma: "PIX", // ou metodoPagamento
        status: "PAGO",
        empresaId: pedido.empresaId,
      },
    });

    await this.atualizarStatusPedido(
      pedidoId,
      PEDIDO_STATUS.PAGO,
      pedido.empresaId,
      "PIX",
    );

    const pagamento = await this.mercadoPagoService.criarPagamentoPix({
      valor: pedido.valorTotal,
      pedidoId: pedido.id,
    });

    return pagamento;
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

    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const pedido = await tx.pedido.findUnique({
        where: { id: pedidoId },
      });
      if (!pedido || !pedido.empresaId) return;
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
            empresaId: pedido?.empresaId, // empresa padrão
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
            status: PEDIDO_STATUS.PAGO,
            metodoPagamento: "MERCADOPAGO",
          },
        });
        console.log("🧾 Gerando DANFE via webhook:", pedidoId);
        await this.gerarDanfe(pedidoId);
      }

    });
  }


async gerarDanfe(pedidoId: number) {
    console.log("🔥 gerarDanfe chamada para pedido:", pedidoId);
    const pedido = await this.prisma.pedido.findUnique({
      where: { id: pedidoId },
      include: {
        cliente: true,
        empresa: true,
        itens: {
          include: {
            produto: true,
          },
        },
        pagamentos: true,
      },
    });

    if (!pedido) {
      throw new NotFoundException("Pedido não encontrado");
    }

    const pastaDanfe = path.resolve(process.cwd(), "uploads", "danfes");
    console.log("📁 Verificando pasta DANFE:", pastaDanfe);

    if (!fs.existsSync(pastaDanfe)) {
      fs.mkdirSync(pastaDanfe, { recursive: true });
    }

    const nomeArquivo = `danfe-pedido-${pedido.id}.pdf`;
    const caminhoArquivo = path.join(pastaDanfe, nomeArquivo);

    const doc = new PDFDocument({
      margin: 50,
      size: "A4",
    });

    const stream = fs.createWriteStream(caminhoArquivo);
    doc.pipe(stream);

    // Cabeçalho
    doc.fontSize(18).text("DANFE - Documento Auxiliar", {
      align: "center",
    });

    doc.moveDown();

    doc
      .fontSize(12)
      .text(`Pedido: ${pedido.numeroPedido}`)
      .text(`Data: ${new Date(pedido.createdAt).toLocaleString()}`)
      .text(`Status: ${pedido.status}`)
      .text(`Forma de pagamento: ${pedido.metodoPagamento}`);

    doc.moveDown();

    // Cliente
    doc.fontSize(14).text("Cliente", {
      underline: true,
    });

    doc
      .fontSize(12)
      .text(`Nome: ${pedido.cliente?.nome || "Consumidor Final"}`);

    doc.moveDown();

    // Empresa
    doc.fontSize(14).text("Empresa", {
      underline: true,
    });

    doc.fontSize(12).text(`Empresa ID: ${pedido.empresaId}`);

    doc.moveDown();

    // Itens
    doc.fontSize(14).text("Itens do Pedido", {
      underline: true,
    });

    pedido.itens.forEach((item) => {
      doc.text(
        `${item.produto.title} - Qtd: ${item.quantidade} - R$ ${item.valorUnitario?.toFixed(2)}`,
      );
    });

    doc.moveDown();

    // Total
    doc.fontSize(14).text(`Valor Total: R$ ${pedido.valorTotal}`, {
      align: "right",
    });

    doc.moveDown(2);

    doc.fontSize(10).text("Documento gerado automaticamente pelo sistema.", {
      align: "center",
    });

    doc.end();

    return {
      sucesso: true,
      arquivo: nomeArquivo,
      caminho: caminhoArquivo,
    };
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

    if (pagamento.status !== PEDIDO_STATUS.PAGO) {
      await this.simularPixPago(txid);
    }

    const atualizado = await this.prisma.pagamento.findFirst({
      where: { pixTxid: txid },
    });

    return {
      status: atualizado?.status,
      pedidoId: atualizado?.pedidoId,
      valor: atualizado?.valor,
    };
  }

  async processarWebhookMP(body: any) {
    console.log("📩 WEBHOOK RECEBIDO:", body);

    const paymentId = body?.data?.id;

    if (!paymentId) {
      console.log("⚠️ Sem paymentId");
      return { ok: true };
    }

    // 🔥 BUSCA PAGAMENTO REAL NO MP
    const pagamentoMP =
      await this.mercadoPagoService.buscarPagamentoPorId(paymentId);

    console.log("💰 PAGAMENTO MP:", pagamentoMP?.status);

    if (!pagamentoMP) return { ok: true };

    // 🔥 PEGA ID DO PEDIDO
    const pedidoId = Number(pagamentoMP.external_reference);

    if (!pedidoId) {
      console.log("⚠️ Sem external_reference");
      return { ok: true };
    }

    // 🔥 SE PAGOU
    if (pagamentoMP.status === "approved") {
      console.log("✅ PAGAMENTO APROVADO");

      const pedido = await this.prisma.pedido.findUnique({
        where: { id: pedidoId },
      });

      if (pedido?.empresaId) {
        await this.atualizarStatusPedido(
          pedidoId,
          PEDIDO_STATUS.PAGO,
          pedido.empresaId,
          "PIX",
        );
      }
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
          status: PEDIDO_STATUS.PAGO,
          pixStatus: PEDIDO_STATUS.PAGO,
        },
      });

      await tx.pedido.update({
        where: { id: pagamento.pedidoId },
        data: {
          status: PEDIDO_STATUS.PAGO,
          updatedAt: new Date(),
        },
      });

      await tx.pedidoStatus.create({
        data: {
          pedidoId: pagamento.pedidoId,
          status: PEDIDO_STATUS.PAGO,
          dataStatus: new Date(),
          empresaId: pagamento.pedido.empresaId,
        },
      });

      // 3. BAIXA ESTOQUE USANDO TX 👇
      for (const item of pagamento.pedido.itens) {
        await tx.produto.update({
          where: {
            id: item.produtoId,
            empresaId: pagamento.pedido.empresaId,
          },
          data: {
            estoque: {
              decrement: item.quantidade,
            },
          },
        });
      }
      // ===================
      // ====================
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
          status: PEDIDO_STATUS.PAGO,
          pixStatus: PEDIDO_STATUS.PAGO,
        },
      });

      // 2) Atualiza pedido
      await tx.pedido.update({
        where: { id: pagamento.pedidoId },
        data: {
          status: PEDIDO_STATUS.FINALIZADO,
          updatedAt: new Date(),
        },
      });

      await tx.pedidoStatus.create({
        data: {
          pedidoId: pagamento.pedidoId,
          status: PEDIDO_STATUS.FINALIZADO,
          dataStatus: new Date(),
          empresaId: pagamento.pedido.empresaId,
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
