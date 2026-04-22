import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
import cloudinary from "../cloudinary/cloudinary.config";
import { Readable } from "stream";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { ProdutoUnidadeDto } from "./dto/create-produto.dto";

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

  async create(data: CreateProdutoDto, user?: any) {
    return this.prisma.produto.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        estoque: data.estoque,
        image: data.fotoUrl || data.imagemUrl || "",
        fotoUrl: data.fotoUrl || data.imagemUrl || "",

        // image: data.image,
        // fotoUrl: data.image,
        cloudinaryId: null,
        codigoBarras: data.codigoBarras,

        categoria: data.categoriaId
          ? {
              connect: {
                id: data.categoriaId,
              },
            }
          : undefined,

        empresa: {
          connect: { id: user.empresaId },
        },

        // 🔥 AQUI ENTRA O NOVO
        unidades: data.unidades
          ? {
              create: data.unidades.map((u: ProdutoUnidadeDto) => ({
                tipo: u.tipo,
                fator: u.fator,
                preco: u.preco,
              })),
            }
          : undefined,
      },

      include: {
        unidades: true,
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

  async listar(filtros: any, user: any, empresaHeader?: number) {
    let empresaId;

    // 🔥 REGRA FINAL
    if (user?.role === "SUPERUSER") {
      empresaId = empresaHeader ?? user.empresaId;
    } else if (user) {
      empresaId = user.empresaId;
    } else {
      // 🔥 VISITANTE
      empresaId = empresaHeader || 1; // ou empresa padrão
    }
    // 🔥 PROTEÇÃO
    const whereBase = empresaId ? { empresaId } : {};

    return this.prisma.produto.findMany({
      where: {
        ...whereBase,

        ...(filtros.nome && {
          title: {
            contains: filtros.nome,
            mode: "insensitive",
          },
        }),
      },
    });
  }

  async listarGrupos(familiaId: number) {
    return this.prisma.grupoProduto.findMany({
      where: {
        familiaId,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async listarCategorias(grupoId: number) {
    return this.prisma.categoriaProduto.findMany({
      where: {
        grupoId,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }

  async listarCategoriasTodas() {
    return this.prisma.categoriaProduto.findMany({
      orderBy: {
        nome: "asc",
      },
    });
  }

  // async listarCategorias( grupoId ) {
  //   return this.prisma.categoriaProduto.findMany({
  //     select: {
  //       id: true,
  //       nome: true,
  //       familia: {
  //         select: {
  //           id: true,
  //           nome: true,
  //         },
  //       },
  //     },
  //     orderBy: { nome: "asc" },
  //   });
  // }

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

  async findOne(id: number, user?: any, empresaHeader?: number) {
    if (!id || isNaN(Number(id))) {
      throw new BadRequestException("ID inválido");
    }

    let empresaId;

    if (user?.role === "SUPERUSER") {
      empresaId = empresaHeader ?? user.empresaId;
    } else if (user) {
      empresaId = user.empresaId;
    } else {
      empresaId = empresaHeader || 1;
    }

    return this.prisma.produto.findFirst({
      where: {
        id,
        ...(empresaId && { empresaId }),
      },
      include: {
        unidades: true,
      },
    });
  }

  // async findOne(id: number, user?: any, empresaHeader?: number) {
  //   let empresaId;

  //   if (user?.role === "SUPERUSER") {
  //     empresaId = empresaHeader ?? user.empresaId;
  //   } else if (user) {
  //     empresaId = user.empresaId;
  //   } else {
  //     // 🔥 visitante
  //     empresaId = empresaHeader || 1;
  //   }

  //   return this.prisma.produto.findFirst({
  //     where: {
  //       id,
  //       ...(empresaId && { empresaId }),
  //     },
  //     include: {
  //       unidades: true,
  //     },
  //   });
  // }

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
