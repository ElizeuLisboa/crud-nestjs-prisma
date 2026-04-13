import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
import cloudinary from "../cloudinary/cloudinary.config";
import { Readable } from "stream";

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

  async create(data: CreateProdutoDTO, user?: any) {
    return this.prisma.produto.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        estoque: data.estoque,
        image: data.image,
        fotoUrl: data.image,
        cloudinaryId: null,
        codigoBarras: data.codigoBarras,

        categoria: {
          connect: {
            id: data.categoriaId,
          },
        },

        empresa: {
          connect: { id: user.empresaId }, // ✅ CORRETO
        },
      },
    });
  }

  async uploadImagem(
    file: Express.Multer.File,
  ): Promise<{ fotoUrl: string; cloudinaryId: string }> {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "produtos" },
        (error, result) => {
          if (error || !result) {
            return reject(new Error("Erro ao enviar imagem"));
          }

          resolve({
            fotoUrl: result.secure_url,
            cloudinaryId: result.public_id,
          });
        },
      );

      Readable.from(file.buffer).pipe(stream);
    });
  }

  async findByBarcode(codigo: string) {
    if (!codigo || codigo.trim() === "") return null;

    return this.prisma.produto.findUnique({
      where: { codigoBarras: codigo },
    });
  }

  async listar(
    filtros: { familia?: string; nome?: string },
    user: any,
    empresaHeader?: number,
  ) {
    let whereBase;

    if (user.role === "SUPERUSER") {
      whereBase = empresaHeader ? { empresaId: empresaHeader } : {};
    } else {
      whereBase = { empresaId: user.empresaId };
    }

    return this.prisma.produto.findMany({
      where: {
        ...whereBase,

        ...(filtros.nome && {
          title: {
            contains: filtros.nome,
            mode: "insensitive",
          },
        }),

        ...(filtros.familia && {
          categoria: {
            familia: {
              id: Number(filtros.familia),
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

  async findAll(filtros: any, user: any, empresaHeader?: number) {
    const where: Prisma.ProdutoWhereInput = {
      empresaId: user.empresaId, // ✅ BASE
    };

    if (filtros.familiaId) {
      where.categoria = {
        familiaId: filtros.familiaId,
      };
    }

    if (filtros.categoriaId) {
      where.categoriaId = filtros.categoriaId;
    }

    if (filtros.nome && filtros.nome.trim() !== "") {
      where.title = {
        contains: filtros.nome,
        mode: "insensitive",
      };
    }

    let whereBase;
    if (user.role === "SUPERUSER") {
      whereBase = empresaHeader ? { empresaId: empresaHeader } : {};
    } else {
      whereBase = { empresaId: user.empresaId };
    }

    return this.prisma.produto.findMany({
      where: {
        ...whereBase,
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

  async findOne(id: number, user: any) {
    const produto = await this.prisma.produto.findFirst({
      where: {
        id,
        empresaId: user.empresaId, // ✅ SEGURANÇA
      },
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

  async buscarProdutos(query: string, user: any) {
    const termo = query?.trim();
    if (!termo) return [];

    const ehNumero = /^\d+$/.test(termo);

    if (ehNumero) {
      const id = Number(termo);

      const produto = await this.prisma.produto.findFirst({
        where: {
          empresaId: user.empresaId,
          OR: [{ id }, { codigoBarras: termo }],
        },
      });

      return produto ? [produto] : [];
    }

    return this.prisma.produto.findMany({
      where: {
        empresaId: user.empresaId,
        title: {
          contains: termo,
          mode: "insensitive",
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }
}
