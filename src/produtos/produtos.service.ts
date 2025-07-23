import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    title: string;
    description: string;
    price: number;
    image: string;
  }) {
    return this.prisma.produto.create({ data });
  }

  async findAll(params: { categoria?: string; nome?: string }) {
    const { categoria, nome } = params;

    const produtos = await this.prisma.produto.findMany({
      where: {
        categoria: categoria || undefined,
        title: nome
          ? {
              contains: nome,
            }
          : undefined,
      },
      orderBy: { id: "desc" },
    });

    return produtos;
  }

  async findOne(id: number) {
    return this.prisma.produto.findUnique({
      where: { id },
    });
  }
}
