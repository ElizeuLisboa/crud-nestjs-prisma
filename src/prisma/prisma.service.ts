import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private empresaIdAtual: number | null = null;

  constructor() {
    super({
      log: ["query", "info", "warn", "error"],
    });
  }

  setEmpresaId(empresaId: number) {
    this.empresaIdAtual = empresaId;
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async aplicarFiltroEmpresa<T>(args: any): Promise<T> {
    if (!this.empresaIdAtual) return args;

    return {
      ...args,
      where: {
        ...(args?.where ?? {}),
        empresaId: this.empresaIdAtual,
      },
    };
  }
}
