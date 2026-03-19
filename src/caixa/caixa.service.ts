import { Injectable, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PixService } from "../pagamentos/pix/pix.service";

@Injectable()
export class CaixaService {
  constructor(
    private prisma: PrismaService,
    private pixService: PixService,
  ) {}

  async finalizarVenda(data: any, usuario: any) {
    console.log("USUARIO JWT:", usuario);

    const empresaId = usuario?.empresaId;

    if (!empresaId) {
      throw new BadRequestException("empresaId não encontrado no usuário");
    }

    const {
      clienteId,
      itens,
      metodoPagamento,
      parcelas = 1,
      valorTotal,
    } = data;

    if (!itens?.length) {
      throw new BadRequestException("Nenhum item informado");
    }

    const ids = itens.map((i: any) => i.produtoId ?? i.id).filter(Boolean);

    if (!ids.length) {
      throw new BadRequestException("Itens sem produtoId válido");
    }

    const produtos = await this.prisma.produto.findMany({
      where: { id: { in: ids } },
    });

    // 🔥 Validação de estoque
    for (const i of itens) {
      const id = i.produtoId ?? i.id;
      const produto = produtos.find((p) => p.id === id);

      if (!produto) {
        throw new BadRequestException(`Produto ${id} não encontrado`);
      }

      if (produto.estoque < i.quantidade) {
        throw new BadRequestException(
          `Estoque insuficiente para ${produto.title}`,
        );
      }
    }

    const totalCalculado = itens.reduce((acc: number, i: any) => {
      const id = i.produtoId ?? i.id;
      const produto = produtos.find((p) => p.id === id)!;
      return acc + produto.price * i.quantidade;
    }, 0);

    return this.prisma.$transaction(async (tx) => {
      const seq = await tx.sequencia.update({
        where: { id: 1 },
        data: { proximoNumero: { increment: 1 } },
      });

      let clienteValido: number | null = null;

      if (clienteId) {
        const existe = await tx.cliente.findUnique({
          where: { id: clienteId },
        });

        clienteValido = existe ? clienteId : null;
      }

      const numeroPedido = `PDV-${String(seq.proximoNumero).padStart(6, "0")}`;

      const pedido = await tx.pedido.create({
        data: {
          numeroPedido,
          empresaId,
          clienteId: clienteValido ?? undefined,
          valorTotal: valorTotal ?? totalCalculado,
          status: "AGUARDANDO_PAGAMENTO",

          itens: {
            create: itens.map((i: any) => {
              const id = i.produtoId ?? i.id;
              const produto = produtos.find((p) => p.id === id)!;

              return {
                empresaId,
                clienteId: clienteValido ?? undefined,
                produtoId: id,
                quantidade: i.quantidade,
                valor: produto.price,
                descricao: produto.title ?? produto.description ?? "Produto",
                valorUnitario: produto.price,
              };
            }),
          },
        },
        include: {
          cliente: true,
          itens: { include: { produto: true } },
        },
      });

      // 🔥 Baixa estoque
      for (const i of itens) {
        const id = i.produtoId ?? i.id;

        await tx.produto.update({
          where: { id },
          data: {
            estoque: {
              decrement: i.quantidade,
            },
          },
        });
      }

      if (!metodoPagamento) {
        throw new BadRequestException("Metodo de pagamento não informado");
      }

      const pagamento = await tx.pagamento.create({
        data: {
          pedidoId: pedido.id,
          clienteId: clienteValido ?? undefined,
          forma: metodoPagamento,
          valor: valorTotal ?? totalCalculado,
          status: metodoPagamento === "PIX" ? "PENDENTE" : "PAGO",
          parcelas: metodoPagamento === "CREDITO" ? parcelas : 1,
          empresaId,
        },
      });

      // 🔥 PIX
      let dadosPix: any = null;

      if (metodoPagamento === "PIX") {
        const pixGerado = this.pixService.gerarPix({
          pedidoId: pedido.id,
          valor: Number(valorTotal ?? totalCalculado),
          descricao: `Pedido ${pedido.id}`,
          nome: clienteValido ? "CLIENTE IDENTIFICADO" : "CLIENTE PDV",
        });

        const qrBase64 = await this.pixService.gerarQrCodeBase64(
          pixGerado.codigo,
        );

        await tx.pagamento.update({
          where: { id: pagamento.id },
          data: {
            pixCodigo: pixGerado.codigo,
            pixTxid: pixGerado.txid,
            pixQrCodeBase64: qrBase64,
            pixStatus: "GERADO",
          },
        });

        dadosPix = {
          pixCodigo: pixGerado.codigo,
          pixQrCodeBase64: qrBase64,
          pixTxid: pixGerado.txid,
        };

        await tx.pagamento.update({
          where: { id: pagamento.id },
          data: { status: "PAGO", pixStatus: "CONFIRMADO" },
        });

        await tx.pedido.update({
          where: { id: pedido.id },
          data: { status: "FINALIZADO" },
        });
      }

      const pedidoCompleto = await tx.pedido.findUnique({
        where: { id: pedido.id },
        include: {
          itens: {
            include: { produto: true },
          },
        },
      });

      const empresa = await tx.empresa.findFirst();

      return {
        ...pedidoCompleto,
        empresa,
        dadosPix,
      };
    });
  }

  private addMeses(data: Date, meses: number) {
    const d = new Date(data);
    d.setMonth(d.getMonth() + meses);
    return d;
  }
}
