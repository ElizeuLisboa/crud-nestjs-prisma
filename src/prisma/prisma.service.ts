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
    let retries = 5;

    while (retries) {
      try {
        await this.$connect();
        console.log("✅ Conectado ao banco");
        break;
      } catch (error) {
        console.log("⏳ Tentando conectar ao banco...");
        retries--;
        await new Promise((res) => setTimeout(res, 3000));
      }
    }
  }

  // async onModuleInit() {
  //   await this.$connect();
  // }

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
