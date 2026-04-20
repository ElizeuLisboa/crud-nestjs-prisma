import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { Express } from "express";
import { UploadService } from "../upload/upload.service";

@Injectable()
export class PedidosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uploadService: UploadService,
  ) {}

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
    try {
      console.log("🧠 USER NO CREATE:", user);
      console.log("🧠 DATA RECEBIDA:", data);

      if (!user?.id) {
        throw new UnauthorizedException("Usuário não identificado");
      }

      const empresaId = user.empresaId;

      const produtoIds = data.itens.map((item) => item.produtoId);
      console.log("🧠 PRODUTO IDS:", produtoIds);

      const produtos = await this.prisma.produto.findMany({
        where: {
          id: { in: produtoIds },
          empresaId: user.empresaId,
        },
      });

      console.log("🧠 PRODUTOS ENCONTRADOS:", produtos);

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

      console.log("🧠 VALOR TOTAL:", valorTotal);

      return await this.prisma.$transaction(async (tx) => {
        const numeroPedido = await this.gerarNumeroPedidoSite(tx);
        console.log("🧠 NUMERO PEDIDO:", numeroPedido);

        const pedido = await tx.pedido.create({
          data: {
            numeroPedido,
            empresaId,
            clienteId: user.id,
            valorTotal,
            status: "PENDENTE",

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
                  fator: item.fator ?? 1,
                  unidade: item.unidade ?? "UN",
                };
              }),
            },
          },

          include: {
            cliente: true,
            itens: { include: { produto: true } },
          },
        });

        console.log("✅ PEDIDO CRIADO:", pedido);

        for (const item of data.itens) {
          const produto = produtosMap.get(item.produtoId);

          if (!produto) continue;

          // 🔥 fator da unidade escolhida
          const fator = Number(item.fator || 1);

          // 🔥 baixa real no estoque
          const quantidadeBaixa = Number(item.quantidade) * fator;

          await tx.produto.update({
            where: {
              id: item.produtoId,
            },
            data: {
              estoque: {
                decrement: quantidadeBaixa,
              },
            },
          });

          console.log(
            `📦 Estoque baixado → Produto ${item.produtoId}: -${quantidadeBaixa}`,
          );
        }

        return pedido;
      });
    } catch (error) {
      console.log("💥 ERRO REAL NO CREATE:", error);
      throw error;
    }
  }

  async findAll(user: any) {
    const whereBase =
      user.role === "SUPERUSER" ? {} : { empresaId: user.empresaId };

    return this.prisma.pedido.findMany({
      where: {
        ...whereBase,
      },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });
  }

  async findByCliente(clienteId: number, user: any) {
    return this.prisma.pedido.findMany({
      where: {
        clienteId,
        empresaId: user.empresaId,
        status: { not: "CANCELADO" },
      },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async listarTodos(user: any) {
    return this.prisma.pedido.findMany({
      where: {
        empresaId: user.empresaId,
      },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async criarVendaCaixa(data: CreatePedidoDto, user: any) {
    if (!user?.id) {
      throw new UnauthorizedException("Usuário não identificado");
    }

    const empresaId = user.empresaId;

    const produtoIds = data.itens.map((item) => item.produtoId);

    const produtos = await this.prisma.produto.findMany({
      where: {
        id: { in: produtoIds },
        empresaId: user.empresaId, // 🔥 FALTAVA
      },
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

  async buscarPorId(id: number, user: any) {
    const pedido = await this.prisma.pedido.findFirst({
      where: {
        id,
        empresaId: user.empresaId,
      },
      include: {
        itens: {
          include: { produto: true },
        },
      },
    });

    if (!pedido) {
      throw new NotFoundException("Pedido não encontrado");
    }

    return pedido;
  }
}
