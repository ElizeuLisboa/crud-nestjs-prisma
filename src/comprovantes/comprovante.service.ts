import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { v2 as cloudinary } from "cloudinary";

@Injectable()
export class ComprovanteService {
  constructor(private prisma: PrismaService) {}

  async salvarComprovante(dados: {
    pedidoId: number;
    nomeRecebedor: string;
    entregadorNome: string;
    fotoUrl: string;
    cloudinaryId: string;
  }) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id: dados.pedidoId },
    });

    if (!pedido) {
      throw new NotFoundException("Pedido não encontrado");
    }

    // ✅ Cria ou atualiza o comprovante de entrega
    const comprovante = await this.prisma.comprovanteEntrega.upsert({
      where: { pedidoId: dados.pedidoId },
      update: {
        nomeRecebedor: dados.nomeRecebedor ?? "Não Informado",
        entregadorNome: dados.entregadorNome ?? "Não Informado",
        fotoUrl: dados.fotoUrl,
        cloudinaryId: dados.cloudinaryId,
        createdAt: new Date(),
      },
      create: {
        pedidoId: dados.pedidoId,
        numeroPedido: pedido.numeroPedido,
        nomeRecebedor: dados.nomeRecebedor ?? "Não Informado",
        entregadorNome: dados.entregadorNome ?? "Não Informado",
        fotoUrl: dados.fotoUrl,
        cloudinaryId: dados.cloudinaryId,
      },
    });
    
    console.log("✅ Comprovante criado:", comprovante);

    // ✅ Atualiza o pedido para status ENTREGUE
    await this.prisma.pedido.update({
      where: { id: dados.pedidoId },
      data: {
        status: "ENTREGUE",
        entregue: true,
        updatedAt: new Date(),
      },
    });

    console.log(`📦 Pedido ${pedido.id} atualizado para ENTREGUE.`);

    return comprovante;
  }
}
