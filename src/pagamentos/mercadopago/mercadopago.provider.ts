import { Provider } from "@nestjs/common";
import { MercadoPagoConfig, Payment, MerchantOrder } from "mercadopago";

export const MERCADO_PAGO = "MERCADO_PAGO";

export const MercadoPagoProvider: Provider = {
  provide: MERCADO_PAGO,
  useFactory: () => {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MP_ACCESS_TOKEN!,
    });

    return {
      payment: new Payment(client),
      merchantOrder: new MerchantOrder(client),
    };
  },
};
