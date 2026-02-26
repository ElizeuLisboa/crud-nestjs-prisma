import { Controller,
  Req, 
  Headers,
  Post, 
  Body, 
  HttpCode } from "@nestjs/common";
import { PagamentosService } from "../pagamentos.service";
import { MercadoPagoWebhookService } from "../mercadopago/mercadopago-webhook.service";

@Controller("webhooks/mercadopago")
export class MercadoPagoWebhookController {
  constructor(
    private readonly pagamentosService: PagamentosService,
    private readonly webhookService: MercadoPagoWebhookService
  ) {}

  @Post()
  @HttpCode(200)
  async receber(
    @Headers("x-signature") signature: string,
    @Req() req: any,
    @Body() body: any
  ) {
    this.webhookService.validateSignature(
      signature,
      req.rawBody,
      process.env.MP_WEBHOOK_SECRET!
    );

    await this.pagamentosService.processarWebhookMercadoPago(body);

    return { ok: true };
  }
}


