import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FretesService {
  constructor(private prisma: PrismaService) {}

  async calcularFrete(cepDestino: string, peso: number) {
    // Busca todas as regras
    const fretes = await this.prisma.frete.findMany({
      include: { transportadora: true },
    });

    // Filtra por faixa de peso
    const validos = fretes.filter(
      (f) => peso >= f.pesoMin && peso <= f.pesoMax
    );

    return validos.map((f) => ({
      transportadora: f.transportadora?.nome || null,
      valor: f.valor,
      prazoEntrega: f.prazoEntrega ?? 5,
    }));
  }
}
