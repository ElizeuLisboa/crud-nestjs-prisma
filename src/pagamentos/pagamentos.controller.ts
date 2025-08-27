import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  Headers,
  Get,
  Param,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { PagamentosService } from "./pagamentos.service";
import { ConfigService } from "@nestjs/config";
import { Request, Response } from "express";
import Stripe from "stripe";
import { CheckoutDto } from "./dto/checkout.dto";
import { PrismaService } from "../prisma/prisma.service";

interface CheckoutItemDto {
  produtoId: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Controller("pagamentos")
export class PagamentosController {
  private stripe: Stripe;

  constructor(
    private readonly pagamentosService: PagamentosService,
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

  @Get("pedido-por-session/:sessionId")
  async getPedidoPorSession(@Param("sessionId") sessionId: string) {
    const pedido = await this.pagamentosService.getPedidoPorSession(sessionId);
    if (!pedido) {
      throw new NotFoundException("Pedido não encontrado");
    }
    return pedido;
  }

  // @Get("pedido-por-session/:sessionId")
  // async getPedidoPorSession(@Param("sessionId") sessionId: string) {
  //   const pedido = await this.prisma.pedido.findUnique({
  //     where: { stripeSessionId: sessionId },
  //     include: { itens: true },
  //   });

  //   if (!pedido)
  //     throw new NotFoundException(
  //       `Pedido não encontrado para sessionId: ${sessionId}`
  //     );

  //   return pedido;
  // }

  @Post("webhook")
  async handleWebhook(
    @Req() req: Request & { rawBody: Buffer },
    @Res() res: Response,
    @Headers("stripe-signature") signature: string
  ) {
    const endpointSecret = this.configService.get<string>(
      "STRIPE_WEBHOOK_SECRET"
    )!;
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(
        req.body,
        signature,
        endpointSecret
      );
      console.log("✅ Webhook recebido:", event.type);
    } catch (err: any) {
      console.error(
        "❌ Erro ao verificar assinatura do webhook Stripe:",
        err.message
      );
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      try {
        await this.pagamentosService.salvarPedido(session);
      } catch (error) {
        console.error("Erro ao salvar pedido no webhook:", error);
        return res.status(500).send("Erro interno ao salvar pedido");
      }
    }

    return res.status(200).json({ received: true });
  }

  // Webhook de teste manual (Thunder Client)
  @Post("webhook-teste")
  async handleWebhookTeste(@Body() body: any, @Res() res: Response) {
    try {
      console.log("Raw body recebido no webhook teste:", body);

      const clienteId = body.clienteId;
      const itemsMetadata = body.items;

      if (!clienteId || !itemsMetadata) {
        return res.status(400).json({ erro: "clienteId ou items ausentes" });
      }

      const cliente = await this.prisma.cliente.findUnique({
        where: { id: clienteId },
      });
      if (!cliente) {
        return res.status(404).json({ erro: "Cliente não encontrado" });
      }

      const numeroPedido = String(
        Math.floor(Math.random() * 9000000 + 1000000)
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
            throw new Error(`Estoque insuficiente para ${produto.title}`);

          // Atualiza estoque
          await tx.produto.update({
            where: { id: produto.id },
            data: { estoque: produto.estoque - item.quantidade },
          });

          itensToCreate.push({
            produtoId: produto.id,
            quantidade: item.quantidade,
            valor: Math.round(item.preco * 100), // centavos
          });
        }

        let valorTotal = 0;

        for (const item of itemsMetadata) {
          valorTotal += item.preco * item.quantidade;
        }

        console.log("Valor total calculado:", valorTotal);
        await tx.pedido.create({
          data: {
            numeroPedido,
            clienteId: cliente.id,
            valorTotal,
            status: "PAGO",
            stripeSessionId: `teste-${numeroPedido}`,
            itens: { create: itensToCreate },
          },
        });
      });

      return res
        .status(200)
        .json({ mensagem: "Pedido teste criado com sucesso" });
    } catch (error: any) {
      console.error("Erro ao processar webhook de teste:", error);
      return res.status(500).json({ erro: error.message });
    }
  }

  @Post("checkout")
  async checkout(@Body() body: CheckoutDto) {
    console.log("👉 Itens recebidos no checkout:", body);
    const sessionData = await this.pagamentosService.criarSessaoCheckout(
      body.items,
      body.clienteId
    );

    console.log("👉 Session criada:", sessionData.id);
    return {
      checkoutUrl: sessionData.checkoutUrl,
      sessionId: sessionData.id, // agora existe
    };
  }
}
