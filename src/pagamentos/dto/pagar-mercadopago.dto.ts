import { Type } from "class-transformer";

export class PagarMercadoPagoDto {
  @Type(() => Number)
  pedidoId: number;

  token: string;

  @Type(() => Number)
  valor: number;

  @Type(() => Number)
  installments: number;

  payer: {
    identification: {
      type: "CPF";
      number: string;
    };
  };
}

