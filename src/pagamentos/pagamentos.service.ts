import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import Stripe from "stripe";
import { CheckoutItemDto } from "./dto/checkout-item.dto";

@Injectable()
export class PagamentosService {
  private stripe: Stripe;
  private logger = new Logger(PagamentosService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService
  ) {
    this.stripe = new Stripe(
      this.configService.get<string>("STRIPE_SECRET_KEY")!,
      {
        apiVersion: "2022-11-15",
      }
    );
  }

  async criarSessaoCheckout(items: CheckoutItemDto[], clienteId: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id: clienteId },
    });
    if (!cliente) throw new Error("Cliente não encontrado");

    const line_items = items.map((item) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: item.nome,
          metadata: { produtoId: item.produtoId.toString() },
        },
        unit_amount: Math.round(item.preco * 100),
      },
      quantity: item.quantidade,
    }));

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url:
        "http://localhost:3000/sucesso?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/erro",
      metadata: {
        clienteId: clienteId.toString(),
        items: JSON.stringify(items),
      },
    });

    return { checkoutUrl: session.url, id: session.id }; // ⚠️ Retorna também session.id
  }

  async salvarPedido(session: Stripe.Checkout.Session) {
    const clienteId = Number(session.metadata?.clienteId);
    if (!clienteId) throw new Error("ClienteId ausente");

    const cliente = await this.prisma.cliente.findUnique({
      where: { id: clienteId },
    });
    if (!cliente) throw new Error("Cliente não encontrado");

    const pedidoExistente = await this.prisma.pedido.findUnique({
      where: { stripeSessionId: session.id },
    });
    if (pedidoExistente) return; // evita duplicidade

    const numeroPedido = String(Math.floor(Math.random() * 9000000 + 1000000));
    let itemsMetadata: CheckoutItemDto[] = JSON.parse(
      session.metadata?.items || "[]"
    );

    await this.prisma.$transaction(async (tx) => {
      const itensToCreate = [];

      for (const item of itemsMetadata) {
        const produto = await tx.produto.findUnique({
          where: { id: item.produtoId },
        });
        if (!produto)
          throw new Error(`Produto ID ${item.produtoId} não encontrado`);
        if (produto.estoque < item.quantidade)
          throw new Error(`Estoque insuficiente`);

        await tx.produto.update({
          where: { id: produto.id },
          data: { estoque: produto.estoque - item.quantidade },
        });

        itensToCreate.push({
          produtoId: produto.id,
          quantidade: item.quantidade,
          valor: produto.price * item.quantidade,
        });
      }

      await tx.pedido.create({
        data: {
          numeroPedido,
          clienteId,
          valorTotal: (session.amount_total ?? 0) / 100,
          status: "PAGO",
          stripeSessionId: session.id,
          itens: { create: itensToCreate },
        },
      });
    });
  }
  async getPedidoPorSession(sessionId: string) {
  return this.prisma.pedido.findUnique({
    where: { stripeSessionId: sessionId },
    include: { itens: { include: { produto: true } } }, // traz itens + produto
  });
}

}
