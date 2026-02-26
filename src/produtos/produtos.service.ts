import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";

export type CreateProdutoDTO = {
  title: string;
  description: string;
  price: number;
  categoriaNome: string; // ✅ agora existe
  image: string;
  estoque: number;
  codigoBarras?: string;
  categoriaId: number; // ✅ adicionado para conexão por ID
};

@Injectable()
export class ProdutosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProdutoDTO) {
    return this.prisma.produto.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        estoque: data.estoque,
        image: data.image,
        codigoBarras: data.codigoBarras,
        // ✅ CONEXÃO PELO NOME (campo @unique)
        categoria: {
          connect: {
            id: data.categoriaId,
          },
        },
      },
    });
  }

  async findByBarcode(codigo: string) {
    if (!codigo || codigo.trim() === "") return null;

    return this.prisma.produto.findUnique({
      where: { codigoBarras: codigo },
    });
  }

  async listar(params: { familia?: string; nome?: string }) {
    const { familia, nome } = params;

    return this.prisma.produto.findMany({
      where: {
        ...(nome && {
          title: {
            contains: nome,
            mode: "insensitive",
          },
        }),

        ...(familia && {
          categoria: {
            familia: {
              id: Number(familia),
            },
          },
        }),
      },

      include: {
        categoria: {
          include: {
            familia: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async listarCategorias() {
    return this.prisma.categoriaProduto.findMany({
      select: {
        id: true,
        nome: true,
        familia: {
          select: {
            id: true,
            nome: true,
          },
        },
      },
      orderBy: { nome: "asc" },
    });
  }

  async listarFamilias() {
    return this.prisma.familiaProduto.findMany({
      orderBy: { nome: "asc" },
      include: {
        categorias: {
          orderBy: { nome: "asc" },
        },
      },
    });
  }


  async findAll(filtros: {
    familiaId?: number;
    categoriaId?: number;
    nome?: string;
  }) {
    const where: Prisma.ProdutoWhereInput = {};

    // 🔹 filtro por família (via categoria)
    if (filtros.familiaId) {
      where.categoria = {
        familiaId: filtros.familiaId,
      };
    }

    // 🔹 filtro por categoria específica
    if (filtros.categoriaId) {
      where.categoriaId = filtros.categoriaId;
    }

    // 🔹 filtro por nome
    if (filtros.nome && filtros.nome.trim() !== "") {
      where.title = {
        contains: filtros.nome,
        mode: "insensitive",
      };
    }

    return this.prisma.produto.findMany({
      where,
      include: {
        categoria: {
          include: {
            familia: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException("ID inválido");
    }

    const produto = await this.prisma.produto.findUnique({
      where: { id },
      include: {
        categoria: {
          select: {
            id: true,
            nome: true,
            familia: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
      },
    });

    if (!produto) {
      throw new NotFoundException("Produto não encontrado");
    }

    return produto;
  }

  async buscarProdutos(query: string) {
    const termo = query?.trim();
    if (!termo) return [];

    const ehNumero = /^\d+$/.test(termo);

    if (ehNumero) {
      const id = Number(termo);

      const produto = await this.prisma.produto.findFirst({
        where: {
          OR: [{ id }, { codigoBarras: termo }],
        },
      });

      return produto ? [produto] : [];
    }

    return this.prisma.produto.findMany({
      where: {
        title: {
          contains: termo,
          mode: "insensitive",
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }
}
