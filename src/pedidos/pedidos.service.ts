import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
// import { CriarPedidoDto } from "./dto/criar-pedido.dto";
import { Express } from "express";

@Injectable()
export class PedidosService {
  constructor(private readonly prisma: PrismaService) {}

  // 🔢 GERADOR DE NUMERO PDV
  private async gerarNumeroPedido(tx: any) {
    const seq = await tx.sequencia.update({
      where: { id: 1 },
      data: { proximoNumero: { increment: 1 } },
    });

    const numero = String(seq.proximoNumero).padStart(6, "0");
    return `PDV-${numero}`;
  }

  private async gerarNumeroPedidoSite(tx: any) {
    const seq = await tx.sequencia.update({
      where: { id: 1 },
      data: { proximoNumero: { increment: 1 } },
    });

    const numero = String(seq.proximoNumero).padStart(6, "0");
    return `PEDS-${numero}`;
  }

  
  async create(data: CreatePedidoDto, user: any) {
    if (!user?.id) {
      throw new UnauthorizedException("Usuário não identificado");
    }

    const empresaId = user.empresaId;

    const produtoIds = data.itens.map((item) => item.produtoId);

    const produtos = await this.prisma.produto.findMany({
      where: { id: { in: produtoIds } },
    });

    if (produtos.length !== produtoIds.length) {
      throw new BadRequestException("Um ou mais produtos não existem");
    }

    const produtosMap = new Map(produtos.map((p) => [p.id, p]));

    const valorTotal = Number(
      data.itens
        .reduce((total, item) => {
          const produto = produtosMap.get(item.produtoId);

          if (!produto) {
            throw new BadRequestException(
              `Produto ${item.produtoId} não encontrado`,
            );
          }

          const valor = Number(item.preco ?? produto.price);

          return total + valor * item.quantidade;
        }, 0)
        .toFixed(2),
    );

    return this.prisma.$transaction(async (tx) => {
      const numeroPedido = await this.gerarNumeroPedidoSite(tx);

      return tx.pedido.create({
        data: {
          numeroPedido,
          empresaId,
          clienteId: user.id,
          valorTotal,
          status: "PENDENTE",
          origem: "SITE",

          itens: {
            create: data.itens.map((item) => {
              const produto = produtosMap.get(item.produtoId);

              if (!produto) {
                throw new BadRequestException(
                  `Produto ${item.produtoId} não encontrado`,
                );
              }

              const valorUnitario = Number(item.preco ?? produto.price);

              return {
                empresaId,
                produtoId: item.produtoId,
                quantidade: item.quantidade,
                valor: valorUnitario,
                nomeProduto: produto.title, // opcional mas top
              };
            }),
          },
        },

        include: {
          cliente: true,
          itens: { include: { produto: true } },
        },
      });
    });
  }

  // ====================================================
  // LISTAR
  // ====================================================

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
      where: {
        clienteId,
        status: { not: "CANCELADO" },
      },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async listarTodos() {
    return this.prisma.pedido.findMany({
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // ====================================================
  // CONFIRMAR ENTREGA
  // ====================================================

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
      throw new NotFoundException(`Pedido ${pedidoId} não encontrado`);
    }

    if (!file) {
      throw new BadRequestException("Arquivo de comprovante não enviado");
    }

    const fotoUrl = `/uploads/${file.filename}`;

    const existing = await this.prisma.comprovanteEntrega.findUnique({
      where: { pedidoId },
    });

    let comprovante;

    if (existing) {
      comprovante = await this.prisma.comprovanteEntrega.update({
        where: { pedidoId },
        data: {
          nomeRecebedor,
          entregadorNome,
          fotoUrl,
        },
      });
    } else {
      comprovante = await this.prisma.comprovanteEntrega.create({
        data: {
          pedidoId,
          nomeRecebedor,
          entregadorNome,
          fotoUrl,
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
      message: `Pedido #${pedido.numeroPedido} entregue com sucesso`,
      pedido: pedidoAtualizado,
      comprovante,
    };
  }

  // ====================================================
  // VENDA PELO CAIXA
  // ====================================================

  async criarVendaCaixa(data: CreatePedidoDto, user: any) {
    if (!user?.id) {
      throw new UnauthorizedException("Usuário não identificado");
    }

    const empresaId = user.empresaId;

    const produtoIds = data.itens.map((item) => item.produtoId);

    const produtos = await this.prisma.produto.findMany({
      where: { id: { in: produtoIds } },
    });

    const produtosMap = new Map(produtos.map((p) => [p.id, p]));

    const valorTotal = data.itens.reduce((total, item) => {
      const produto = produtosMap.get(item.produtoId);
      return total + (produto?.price ?? 0) * item.quantidade;
    }, 0);

    return this.prisma.$transaction(async (tx) => {
      const numeroPedido = await this.gerarNumeroPedido(tx);

      return tx.pedido.create({
        data: {
          numeroPedido,
          empresaId,
          clienteId: user.id,
          valorTotal,
          status: "PAGO",

          itens: {
            create: data.itens.map((item) => {
              const produto = produtosMap.get(item.produtoId);

              return {
                empresaId,
                produtoId: item.produtoId,
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
    });
  }

  // ====================================================
  // BUSCAR PEDIDO
  // ====================================================

  async buscarPorId(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        itens: {
          include: { produto: true },
        },
      },
    });

    if (!pedido) {
      throw new NotFoundException("Pedido não encontrado");
    }

    return {
      numeroPedido: pedido.numeroPedido,
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
