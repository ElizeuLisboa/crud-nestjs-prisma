import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  async findAll(filtros: { categoria?: string; nome?: string }) {
    const where: Prisma.ProdutoWhereInput = {};

    if (filtros.categoria) {
      where.categoria = {
        contains: filtros.categoria,
        mode: Prisma.QueryMode.insensitive, // ✅ funciona na v6.12.0
      };
    }

    if (filtros.nome) {
      where.title = {
        contains: filtros.nome,
        mode: Prisma.QueryMode.insensitive, // ✅ funciona na v6.12.0
      };
    }

    const produtos = await this.prisma.produto.findMany({ where });

    console.log("👉 Produtos encontrados:", produtos); // para debug
    return produtos;
  }

 

  // async findAll(params: { categoria?: string; nome?: string }) {
  //   const { categoria, nome } = params;

  //   const produtos = await this.prisma.produto.findMany({
  //     where: {
  //       categoria: categoria || undefined,
  //       title: nome
  //         ? {
  //             contains: nome,
  //           }
  //         : undefined,
  //     },
  //     orderBy: { id: "desc" },
  //   });

  //   return produtos;
  // }

  async findOne(id: number) {
    // console.log("ID recebido no service:", id);
    if (!id || isNaN(id)) {
      throw new BadRequestException("ID inválido");
    }

    const produto = await this.prisma.produto.findUnique({
      where: { id },
    });

    if (!produto) {
      throw new NotFoundException("Produto não encontrado");
    }

    return produto;
  }
}
