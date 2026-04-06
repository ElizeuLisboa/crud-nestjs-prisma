import { Controller, Get, Body, Post } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("empresas")
export class EmpresaController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async criar(@Body() data: any) {
    return this.prisma.empresa.create({
      data,
    });
  }

  @Get()
  async listar() {
    return this.prisma.empresa.findMany({
      select: {
        id: true,
        nome: true,
      },
    });
  }
}
