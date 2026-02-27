import { Injectable, Logger, BadRequestException } from "@nestjs/common";
import { MercadoPagoConfig, Payment, Preference } from "mercadopago";
import { PrismaService } from "../../prisma/prisma.service";
import { PagamentoCreditoDTO } from "../dto/pagamento.dto";
import { PagarMercadoPagoDto } from "../dto/pagar-mercadopago.dto";

@Injectable()
export class MercadoPagoService {
  private readonly logger = new Logger(MercadoPagoService.name);

  private client;
  private payment;
  private preference;

  constructor(private readonly prisma: PrismaService) {
    this.client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
    });

    this.payment = new Payment(this.client);
    this.preference = new Preference(this.client);
  }

  // constructor() {
  //   const client = new MercadoPagoConfig({
  //     accessToken: process.env.MP_ACCESS_TOKEN!,
  //   });

  //   this.payment = new Payment(client);
  //   this.preference = new Preference(client);
  // }

  async buscarPagamentoPorId(paymentId: string) {
    try {
      return await this.payment.get({ id: paymentId });
    } catch (error: any) {
      this.logger.error(
        `Erro ao buscar pagamento MP ${paymentId}`,
        error?.message || error,
      );
      return null;
    }
  }

  async criarCheckoutMercadoPago(pedido: any) {
    const FRONT_URL = process.env.FRONT_URL;
    const preference = {
      items: pedido.itens.map((item: any) => ({
        id: String(item.produtoId), // 👈 OBRIGATÓRIO
        title: item.produto.title,
        quantity: item.quantidade,
        unit_price: Number(item.valor),
        currency_id: "BRL",
      })),

      external_reference: String(pedido.id),
      back_urls: {
        success: `${FRONT_URL}/pagamento-sucesso`,
        failure: `${FRONT_URL}/erro-pagamento`,
        pending: `${FRONT_URL}/pagamento-pendente`,
      },
      notification_url: process.env.MP_WEBHOOK_URL,
    };
    return this.preference.create({ body: preference });
  }

  async pagarComCartao(payload: PagarMercadoPagoDto) {
    const body = {
      transaction_amount: Number(payload.valor),
      token: payload.token,
      installments: Number(payload.installments),

      payment_method_id: "master",

      external_reference: String(payload.pedidoId),

      description: `Pedido #${payload.pedidoId}`,

      payer: {
        email: "cliente@email.com",
        identification: {
          type: "CPF",
          number: payload.payer.identification.number,
        },
      },
    };

    try {
      this.logger.log("Enviando pagamento para Mercado Pago");
      this.logger.debug(JSON.stringify(body, null, 2));

      const resultado = await this.payment.create({ body });

      this.logger.log("Resposta MP:");
      this.logger.debug(JSON.stringify(resultado, null, 2));

      return resultado;
    } catch (error: any) {
      this.logger.error("Erro Mercado Pago:", JSON.stringify(error, null, 2));

      throw new BadRequestException({
        message: "Erro ao processar pagamento no Mercado Pago",
        detalhe: error?.cause || error?.message,
      });
    }
  }
}
