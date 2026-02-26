import { Module } from "@nestjs/common";
import { MercadoPagoProvider } from "./mercadopago.provider";
import { MercadoPagoService } from "./mercadopago.service";

@Module({
  providers: [MercadoPagoProvider, MercadoPagoService],
  exports: [MercadoPagoService],
})
export class MercadoPagoModule {}
