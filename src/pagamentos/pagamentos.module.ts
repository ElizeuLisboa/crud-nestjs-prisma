import { Module } from "@nestjs/common";
import { PagamentosService } from "./pagamentos.service";
import { MercadoPagoService } from "./mercadopago/mercadopago.service";
import { MercadoPagoWebhookController } from "./mercadopago/mercadopago-webhook.controller"; 
import { MercadoPagoWebhookService } from "./mercadopago/mercadopago-webhook.service";
import { PrismaModule } from "../prisma/prisma.module";
import { MercadoPagoController } from "./mercadopago/mercadopago.controller";
import { PrismaService } from "../prisma/prisma.service";
import { PagamentosController } from "./pagamentos.controller";

@Module({
  imports: [],
  controllers: [
    PagamentosController,
  ],
  providers: [
    PagamentosService,
    MercadoPagoService,
    PrismaService,
  ],
})
export class PagamentosModule {}
