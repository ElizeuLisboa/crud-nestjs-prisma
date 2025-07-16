import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { randomInt } from "crypto";

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreatePedidoDto, clienteId: number) {
    const numeroPedido = String(randomInt(1000000, 9999999)); // entre 7 dígitos

    return this.prisma.pedido.create({
      data: {
        numeroPedido, // ✅ agora obrigatório
        cliente: { connect: { id: clienteId } },
        itens: {
          create: data.itens!.map((item) => ({
            produto: { connect: { id: item.produtoId } },
            quantidade: item.quantidade,
          })),
        },
      },
      include: {
        cliente: true,
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.pedido.findMany({
      include: {
        cliente: true,
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });
  }

  async findByCliente(clienteId: number) {
    return this.prisma.pedido.findMany({
      where: { clienteId },
      include: {
        cliente: true,
        itens: {
          include: {
            produto: true,
          },
        },
      },
    });
  }
}
