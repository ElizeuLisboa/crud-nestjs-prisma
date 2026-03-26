import { Type } from "class-transformer";

export class PagarMercadoPagoDto {
  @Type(() => Number)
  pedidoId: number;

  token: string;

  @Type(() => Number)
  valor: number;

  @Type(() => Number)
  installments: number;

  @Type(() => String )
  paymentMethodId: string;

  payer: {
    identification: {
      type: "CPF";
      number: string;
    };
  };
}

