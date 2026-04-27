import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { UploadService } from "../upload/upload.service";
import { PEDIDO_STATUS } from "../common/enums/pedido-status.enum";

@Injectable()
export class PedidosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uploadService: UploadService,
  ) {}

  // =========================================================
  // 🔢 GERADOR DE NÚMERO DE PEDIDO - PDV
  // =========================================================

  private async gerarNumeroPedido(tx: any) {
    const seq = await tx.sequencia.update({
      where: { id: 1 },
      data: {
        proximoNumero: {
          increment: 1,
        },
      },
    });

    const numero = String(seq.proximoNumero).padStart(6, "0");
    return `PDV-${numero}`;
  }

  // =========================================================
  // 🔢 GERADOR DE NÚMERO DE PEDIDO - SITE
  // =========================================================

  private async gerarNumeroPedidoSite(tx: any) {
    const seq = await tx.sequencia.update({
      where: { id: 1 },
      data: {
        proximoNumero: {
          increment: 1,
        },
      },
    });

    const numero = String(seq.proximoNumero).padStart(6, "0");
    return `PEDS-${numero}`;
  }

  // =========================================================
  // 🔥 CENTRALIZADOR DE STATUS + HISTÓRICO
  // =========================================================

  async atualizarStatusPedido(
    pedidoId: number,
    novoStatus: string,
    empresaId: number,
  ) {
    await this.prisma.pedido.update({
      where: {
        id: pedidoId,
      },
      data: {
        status: novoStatus,
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

    console.log(
      `📦 Pedido ${pedidoId} atualizado para status: ${novoStatus}`,
    );
  }

  // =========================================================
  // 🛒 PEDIDO SITE
  // =========================================================

  async create(data: CreatePedidoDto, user: any) {
    try {
      
      if (!user?.id) {
        throw new UnauthorizedException("Usuário não identificado");
      }

      const empresaId = user.empresaId;

      const produtoIds = data.itens.map((item) => item.produtoId);

      const produtos = await this.prisma.produto.findMany({
        where: {
          id: {
            in: produtoIds,
          },
          empresaId,
        },
      });

      if (produtos.length !== produtoIds.length) {
        throw new BadRequestException(
          "Um ou mais produtos não existem",
        );
      }

      const produtosMap = new Map(
        produtos.map((produto) => [produto.id, produto]),
      );

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

            return total + valor * Number(item.quantidade);
          }, 0)
          .toFixed(2),
      );

      return await this.prisma.$transaction(async (tx) => {
        const numeroPedido = await this.gerarNumeroPedidoSite(tx);

        const pedido = await tx.pedido.create({
          data: {
            numeroPedido,
            empresaId,
            clienteId: null,
            valorTotal,
            status: PEDIDO_STATUS.PENDENTE,
            origem: "SITE",

            itens: {
              create: data.itens.map((item) => {
                const produto = produtosMap.get(item.produtoId);

                if (!produto) {
                  throw new BadRequestException(
                    `Produto ${item.produtoId} não encontrado`,
                  );
                }

                const valorUnitario = Number(
                  item.preco ?? produto.price,
                );

                return {
                  empresaId,
                  produtoId: item.produtoId,
                  quantidade: Number(item.quantidade),
                  valor: valorUnitario,
                  fator: Number(item.fator ?? 1),
                  unidade: item.unidade ?? "UN",
                };
              }),
            },
          },

          include: {
            cliente: true,
            itens: {
              include: {
                produto: true,
              },
            },
          },
        });

        // 🔥 REGISTRA HISTÓRICO INICIAL
        await tx.pedidoStatus.create({
          data: {
            pedidoId: pedido.id,
            status: PEDIDO_STATUS.PENDENTE,
            dataStatus: new Date(),
            empresaId,
          },
        });

        // 🔥 BAIXA DE ESTOQUE REAL POR FATOR
        for (const item of data.itens) {
          const fator = Number(item.fator || 1);
          const quantidadeBaixa =
            Number(item.quantidade) * fator;

          await tx.produto.update({
            where: {
              id: item.produtoId,
              empresaId,
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

        console.log("✅ PEDIDO SITE CRIADO:", pedido);

        return pedido;
      });
    } catch (error) {
      console.log("💥 ERRO REAL NO CREATE:", error);
      throw error;
    }
  }

  // =========================================================
  // 🧾 VENDA PDV / CAIXA
  // =========================================================

  async criarVendaCaixa(data: CreatePedidoDto, user: any) {
    if (!user?.id) {
      throw new UnauthorizedException(
        "Usuário não identificado",
      );
    }

    const empresaId = user.empresaId;

    const produtoIds = data.itens.map(
      (item) => item.produtoId,
    );

    const produtos = await this.prisma.produto.findMany({
      where: {
        id: {
          in: produtoIds,
        },
        empresaId,
      },
    });

    const produtosMap = new Map(
      produtos.map((produto) => [produto.id, produto]),
    );

    const valorTotal = Number(
      data.itens.reduce((total, item) => {
        const produto = produtosMap.get(item.produtoId);

        return (
          total +
          Number(produto?.price ?? 0) *
            Number(item.quantidade)
        );
      }, 0),
    );

    return this.prisma.$transaction(async (tx) => {
      const numeroPedido = await this.gerarNumeroPedido(tx);

      const pedido = await tx.pedido.create({
        data: {
          numeroPedido,
          empresaId,
          clienteId: user.id,
          valorTotal,
          status: PEDIDO_STATUS.PAGO,
          metodoPagamento: "PDV",
          origem: "PDV",

          itens: {
            create: data.itens.map((item) => {
              const produto = produtosMap.get(item.produtoId);

              return {
                empresaId,
                produtoId: item.produtoId,
                quantidade: Number(item.quantidade),
                valor: Number(produto?.price ?? 0),
                fator: Number(item.fator ?? 1),
                unidade: item.unidade ?? "UN",
              };
            }),
          },
        },

        include: {
          cliente: true,
          itens: {
            include: {
              produto: true,
            },
          },
        },
      });

      // 🔥 HISTÓRICO AUTOMÁTICO
      await tx.pedidoStatus.create({
        data: {
          pedidoId: pedido.id,
          status: PEDIDO_STATUS.PAGO,
          dataStatus: new Date(),
          empresaId,
        },
      });

      console.log("✅ VENDA PDV CRIADA:", pedido);

      return pedido;
    });
  }

  // =========================================================
  // 📋 LISTAR TODOS
  // =========================================================

  async findAll(user: any) {
    const whereBase =
      user.role === "SUPERUSER"
        ? {}
        : {
            empresaId: user.empresaId,
          };

    return this.prisma.pedido.findMany({
      where: {
        ...whereBase,
      },
      include: {
        cliente: true,
        itens: {
          include: {
            produto: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // =========================================================
  // 👤 PEDIDOS DO CLIENTE
  // =========================================================

  async findByCliente(clienteId: number, user: any) {
    return this.prisma.pedido.findMany({
      where: {
        clienteId,
        empresaId: user.empresaId,
        status: {
          not: PEDIDO_STATUS.CANCELADO,
        },
      },
      include: {
        cliente: true,
        itens: {
          include: {
            produto: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // =========================================================
  // 📦 LISTAGEM ADMIN
  // =========================================================

  async listarTodos(user: any) {
    return this.prisma.pedido.findMany({
      where: {
        empresaId: user.empresaId,
      },
      include: {
        cliente: true,
        itens: {
          include: {
            produto: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // =========================================================
  // 🔎 BUSCAR POR ID
  // =========================================================

  async buscarPorId(id: number, user: any) {
    const pedido = await this.prisma.pedido.findFirst({
      where: {
        id,
        // empresaId: user.empresaId,
      },
      include: {
        itens: {
          include: {
            produto: true,
          },
        },
        cliente: true,
        empresa: true,
      },
    });

    if (!pedido) {
      throw new NotFoundException(
        "Pedido não encontrado",
      );
    }

    return pedido;
  }
}


