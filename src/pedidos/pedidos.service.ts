import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { CriarPedidoDto } from "./dto/criar-pedido.dto";
import { randomInt } from "crypto";
import { Prisma, PrismaClient } from "@prisma/client";
import { Express } from 'express';
// import Stripe from "stripe";

type VendaItem = {
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
};

type CriarVendaBody = {
  clienteEmail?: string | null;
  clienteNome?: string;
  itens: VendaItem[];
  status?: string;
};

@Injectable()
export class PedidosService {
  

  constructor(private readonly prisma: PrismaService) {}
    // this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    //   apiVersion: "2022-11-15",
    // });
  // }

  async create(data: CreatePedidoDto, clienteId: number) {
    const numeroPedido = String(randomInt(1000000, 9999999));

    // Busca todos os produtos enviados para validar e calcular total
    const produtoIds = data.itens.map((item) => item.produtoId);
    const produtos = await this.prisma.produto.findMany({
      where: { id: { in: produtoIds } },
    });

    if (produtos.length !== produtoIds.length) {
      throw new Error("Um ou mais produtos não existem");
    }

    const produtosMap = new Map(produtos.map((p) => [p.id, p]));

    // ✅ Calcula o valor total do pedido
    const valorTotal = data.itens.reduce((total, item) => {
      const produto = produtosMap.get(item.produtoId);
      return total + (produto?.price ?? 0) * item.quantidade;
    }, 0);

    // ✅ Cria sessão Stripe
    // const session = await this.stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items: data.itens.map((item) => {
    //     const produto = produtosMap.get(item.produtoId);
    //     return {
    //       price_data: {
    //         currency: "brl",
    //         product_data: { name: produto?.title ?? "" },
    //         unit_amount: (produto?.price ?? 0) * 100, // valor em centavos
    //       },
    //       quantity: item.quantidade,
    //     };
    //   }),
    //   mode: "payment",
    //   success_url: `${process.env.FRONT_URL}/sucesso`,
    //   cancel_url: `${process.env.FRONT_URL}/cancelado`,
    // });

    // ✅ Transação: cria pedido + itens
    return this.prisma.$transaction(async (tx) => {
      const pedido = await tx.pedido.create({
        data: {
          numeroPedido,
          cliente: { connect: { id: clienteId } },
          valorTotal, // <-- nome ajustado conforme seu modelo
          status: "AGUARDANDO_PAGAMENTO",
          // stripeSessionId: sessionId, 

          itens: {
            create: data.itens.map((item) => {
              const produto = produtosMap.get(item.produtoId);
              const valorItem = (produto?.price ?? 0) * item.quantidade; // ✅ cálculo correto
              return {
                produto: { connect: { id: item.produtoId } },
                quantidade: item.quantidade,
                valor: valorItem,
              };
            }),
          },
        },
        include: {
          cliente: true,
          itens: { include: { produto: true } },
        },
      });

      return pedido;
    });
  }

  async criarPedido(user: any, body: CriarPedidoDto) {
    if (!user?.id) {
      throw new UnauthorizedException("Usuário não identificado");
    }

    return await this.prisma.$transaction(async (tx) => {
      const seq = await tx.sequencia.update({
        where: { id: 1 },
        data: { proximoNumero: { increment: 1 } },
      });

      const pedido = await tx.pedido.create({
        data: {
          clienteId: user.id, // ✅ agora existe
          numeroPedido: String(seq.proximoNumero).padStart(6, "0"),
          status: "PENDENTE",
          itens: {
            create: body.itens.map((item) => ({
              produtoId: item.produtoId,
              quantidade: item.quantidade,
              preco: item.preco, // ⚠️ você estava usando "valor"
            })),
          },
        },
      });

      const empresa = await tx.empresa.findFirst();
      console.log("🏢 Empresa encontrada:", empresa);
      return {
        pedidoId: pedido.id,
        numeroPedido: pedido.numeroPedido,
        empresa: empresa ?? {
          nome: "SUA EMPRESA AQUI",
          cnpj: "00.000.000/0001-00",
        },
      };
    });
  }

  async findAll() {
    return this.prisma.pedido.findMany({
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });
  }

  async findByCliente(clienteId: number) {
    return this.prisma.pedido.findMany({
      where: { clienteId, status: { not: "CANCELADO" } },
      include: {
        itens: {
          include: {
            produto: true,
          },
        },
        cliente: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findByStripeSessionId(sessionId: string) {
    return this.prisma.pedido.findFirst({
      where: { stripeSessionId: sessionId },
      include: { itens: { include: { produto: true } } },
    });
  }

  async listarTodos() {
    return this.prisma.pedido.findMany({
      include: { itens: { include: { produto: true } }, cliente: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async confirmarEntrega(
    pedidoId: number,
    nomeRecebedor: string,
    entregadorNome: string,
    file: Express.Multer.File,
  ) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id: pedidoId },
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido ${pedidoId} não encontrado.`);
    }

    if (!file) {
      throw new BadRequestException("Arquivo de comprovante não enviado.");
    }

    const fotoUrl = `/uploads/${file.filename}`;
    const cloudinaryId = file.filename;

    const existingComprovante = await this.prisma.comprovanteEntrega.findUnique(
      {
        where: { pedidoId },
      },
    );

    let comprovante;
    if (existingComprovante) {
      comprovante = await this.prisma.comprovanteEntrega.update({
        where: { pedidoId },
        data: {
          nomeRecebedor,
          entregadorNome,
          fotoUrl,
          cloudinaryId,
        },
      });
    } else {
      comprovante = await this.prisma.comprovanteEntrega.create({
        data: {
          pedidoId,
          nomeRecebedor,
          entregadorNome,
          fotoUrl,
          cloudinaryId,
        },
      });
    }

    const pedidoAtualizado = await this.prisma.pedido.update({
      where: { id: pedidoId },
      data: {
        status: "ENTREGUE",
        entregue: true,
      },
    });

    return {
      message: `✅ Pedido #${pedido.numeroPedido} entregue com sucesso!`,
      pedido: pedidoAtualizado,
      comprovante,
    };
  }

  async criarVendaCaixa(data: CreatePedidoDto, clienteId: number) {
    const numeroPedido = String(randomInt(1000000, 9999999));

    const produtoIds = data.itens.map((item) => item.produtoId);
    const produtos = await this.prisma.produto.findMany({
      where: { id: { in: produtoIds } },
    });

    if (produtos.length !== produtoIds.length) {
      throw new Error("Um ou mais produtos não existem");
    }

    const produtosMap = new Map(produtos.map((p) => [p.id, p]));
    const valorTotal = data.itens.reduce((total, item) => {
      const produto = produtosMap.get(item.produtoId);
      return total + (produto?.price ?? 0) * item.quantidade;
    }, 0);

    // Criação direta (sem Stripe)
    return this.prisma.pedido.create({
      data: {
        numeroPedido,
        cliente: { connect: { id: clienteId } },
        valorTotal,
        status: "PAGO",
        itens: {
          create: data.itens.map((item) => {
            const produto = produtosMap.get(item.produtoId);
            return {
              produto: { connect: { id: item.produtoId } },
              quantidade: item.quantidade,
              valor: (produto?.price ?? 0) * item.quantidade,
            };
          }),
        },
      },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });
  }

  async criarPedidoSite(body: any, clienteId: number) {
    const { itens, valorTotal } = body;

    if (!valorTotal) {
      throw new BadRequestException("valorTotal não enviado");
    }

    if (!itens || itens.length === 0) {
      throw new BadRequestException("Pedido sem itens");
    }

    return this.prisma.$transaction(async (tx) => {
      const METODO = "PIX"; // ← depois você vai receber isso do front

      const pedido = await tx.pedido.create({
        data: {
          numeroPedido: `PED-${Date.now()}`,
          status: "AGUARDANDO_PAGAMENTO",

          metodoPagamento: METODO,

          valorTotal: Number(valorTotal),

          clienteId,

          // ✅ REGRA CORRETA
          entregue: METODO !== "PIX",
        },
      });

      await tx.itemPedido.createMany({
        data: itens.map((item: any) => ({
          pedidoId: pedido.id,
          produtoId: item.produtoId,
          quantidade: item.quantidade,
          valor: item.valor,
        })),
      });

      return pedido;
    });
  }

  async buscarPorId(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },

      include: {
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });

    if (!pedido) {
      throw new NotFoundException("Pedido não encontrado");
    }

    // 👉 Formato exatamente como Sucesso.jsx espera
    return {
      numeroPedido: pedido.id,
      valorTotal: pedido.valorTotal,
      status: pedido.status,

      itens: pedido.itens.map((item) => ({
        id: item.id,
        quantidade: item.quantidade,
        valor: item.valor,

        produto: {
          title: item.produto?.title || "Produto",
        },
      })),
    };
  }
}
