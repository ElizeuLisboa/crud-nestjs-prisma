import { Injectable, BadRequestException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PixService } from "../pagamentos/pix/pix.service";
import console from "console";

@Injectable()
export class CaixaService {
  constructor(
    private prisma: PrismaService,
    private pixService: PixService,
  ) {}

  // async finalizarVenda(body: any, usuario: any) {
  async finalizarVenda(data: any) {
    const {
      operadorId,
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

    // 🔥 1️⃣ VALIDAÇÃO DE EXISTÊNCIA + ESTOQUE
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

    // 🔥 2️⃣ CALCULAR TOTAL REAL PELO BANCO
    const totalCalculado = itens.reduce((acc: number, i: any) => {
      const id = i.produtoId ?? i.id;
      const produto = produtos.find((p) => p.id === id)!;
      return acc + produto.price * i.quantidade;
    }, 0);

    return this.prisma.$transaction(async (tx) => {
      let clienteValido: number | null = null;
      console.log("clienteId recebido:", clienteId);  
      if (clienteId) {
        const existe = await tx.cliente.findUnique({
          where: { id: clienteId },
        });
        clienteValido = existe ? clienteId : null;
      }

      // 🔥 3️⃣ CRIAR PEDIDO
      const pedido = await tx.pedido.create({
        data: {
          numeroPedido: `PDV-${Date.now()}`,
          clienteId: clienteValido,
          caixaId: operadorId,
          valorTotal: valorTotal ?? totalCalculado,
          metodoPagamento,
          status:
            metodoPagamento === "PIX" ? "AGUARDANDO_PAGAMENTO" : "FINALIZADO",
            
          itens: {
            create: itens.map((i: any) => {
              const id = i.produtoId ?? i.id;
              const produto = produtos.find((p) => p.id === id)!;

              return {
                produtoId: id,
                quantidade: i.quantidade,
                valor: produto.price,
                descricao: produto.title ?? produto.description ?? "Produto",
                valorUnitario: produto.price,
              };
            }),
          },
        },
      });

      // 🔥 4️⃣ BAIXA DE ESTOQUE (DENTRO DA TRANSACTION)
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

      // 🔥 5️⃣ CRIAR PAGAMENTO
      if (!metodoPagamento) {
        throw new BadRequestException("Metodo de pagamento não informado");
      }
      const pagamento = await tx.pagamento.create({
        data: {
          pedidoId: pedido.id,
          clienteId: clienteValido,
          forma: metodoPagamento,
          valor: valorTotal ?? totalCalculado,
          status: metodoPagamento === "PIX" ? "PENDENTE" : "PAGO",
          parcelas: metodoPagamento === "CREDITO" ? parcelas : 1,
        },
      });

      // 🔥 6️⃣ GERAR PARCELAS SE CRÉDITO
      if (metodoPagamento === "CREDITO") {
        const total = Number(valorTotal ?? totalCalculado);
        const valorBase = Math.floor((total / parcelas) * 100) / 100;

        const parcelasData = Array.from({ length: parcelas }).map(
          (_, index) => {
            const isUltima = index === parcelas - 1;

            return {
              pagamentoId: pagamento.id,
              numeroParcela: index + 1,
              valor: isUltima
                ? Number((total - valorBase * (parcelas - 1)).toFixed(2))
                : valorBase,
              vencimento: this.addMeses(new Date(), index),
            };
          },
        );

        await tx.parcelaPagamento.createMany({
          data: parcelasData,
        });
      }

      // 🔥 7️⃣ GERAR PIX
      let dadosPix: any = null;
      //console.log("CHAMOU FINALIZAR VENDA");
      // console.log("metodoPagamento:", metodoPagamento);
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
        // console.log("PIX GERADO:", pixGerado);
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
            include: {
              produto: true,
            },
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
