import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("empresas")
export class EmpresaController {
  constructor(private prisma: PrismaService) {}

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