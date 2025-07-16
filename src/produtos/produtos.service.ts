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

  async findAll() {
    return this.prisma.produto.findMany();
  }
}
