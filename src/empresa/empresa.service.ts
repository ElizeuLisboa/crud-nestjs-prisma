import { Injectable, NotFoundException, } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmpresaController } from "./empresa.controller";

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.empresa.create({ data });
  }

  async findAll() {
    return this.prisma.empresa.findMany({
      select: {
        id: true,
        nome: true,
        cnpj: true,
        endereco: true,
        telefone: true,
        ativa: true,
      },
    });
  }

  // ⚠️ melhor NÃO usar isso em produção
  async delete(id: number) {
    return this.prisma.empresa.delete({
      where: { id },
    });
  }

  // ✅ esse é o correto (bloquear)
  async toggle(id: number, ativa: boolean) {
    return this.prisma.empresa.update({
      where: { id },
      data: { ativa: !ativa },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.empresa.update({
      where: { id },
      data,
    });
  }

async findOne(id: number) {
  const empresa = await this.prisma.empresa.findUnique({
    where: { id },
  });

  if (!empresa) {
    throw new NotFoundException("Empresa não encontrada");
  }

  return empresa;
}


}
