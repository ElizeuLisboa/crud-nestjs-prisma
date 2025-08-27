import { Injectable } from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { randomInt } from "crypto";
import Stripe from "stripe";

@Injectable()
export class PedidosService {
  private stripe: Stripe;

  constructor(private prisma: PrismaService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2022-11-15',
    });
  }

  async create(data: CreatePedidoDto, clienteId: number) {
    const numeroPedido = String(randomInt(1000000, 9999999));
    
    // Busca todos os produtos enviados para validar e calcular total
    const produtoIds = data.itens.map((item) => item.produtoId);
    const produtos = await this.prisma.produto.findMany({
      where: { id: { in: produtoIds } },
    });

    if (produtos.length !== produtoIds.length) {
      throw new Error("Um ou mais produtos não existem");
    }

    // Mapeia os produtos para acesso rápido por ID
    const produtosMap = new Map(produtos.map((p) => [p.id, p]));

    // Calcula o valor total
    const valorTotal = data.itens.reduce((total, item) => {
      const produto = produtosMap.get(item.produtoId);
      return total + (produto?.price ?? 0) * item.quantidade;
    }, 0);
    
    // Cria a sessão Stripe antes da transação
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: data.itens.map((item) => {
        const produto = produtosMap.get(item.produtoId);
        return {
          price_data: {
            currency: 'brl',
            product_data: { name: produto?.title ?? '' },
            unit_amount: (produto?.price ?? 0) * 100, // valor em centavos
          },
          quantity: item.quantidade,
        };
      }),
      mode: 'payment',
      success_url: 'http://localhost:3000/sucesso',
      cancel_url: 'http://localhost:3000/cancelado',
    });

    // Cria o pedido e os itens em transação
    return this.prisma.$transaction(async (tx) => {
      const pedido = await tx.pedido.create({
        data: {
          numeroPedido,
          cliente: { connect: { id: clienteId } },
          valorTotal,
          status: "PAGO",
          stripeSessionId: session.id, // Agora funciona
          itens: {
            create: data.itens.map((item) => {
              const produto = produtosMap.get(item.produtoId);
              return {
                produto: { connect: { id: item.produtoId } },
                quantidade: item.quantidade,
                valor: produto?.price ?? 0,
              };
            }),
          },
        },
        include: {
          cliente: true,
          itens: {
            include: { produto: true },
          },
        },
      });

      return pedido;
    });
  }

  async findAll() {
    return this.prisma.pedido.findMany({
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });
  }

  async findByCliente(clienteId: number) {
    return this.prisma.pedido.findMany({
      where: { clienteId },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });
  }
}

