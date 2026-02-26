import { Controller, Post, Body, UseGuards, Req } from "@nestjs/common";
import { MercadoPagoService } from "./mercadopago.service";
import { JwtAuthGuard } from "../../modules/auth/jwt-auth.guard";
import { PagamentosService } from "../pagamentos.service";

@Controller("pagamentos/mercadopago")
export class MercadoPagoController {
  constructor(private readonly pagamentosService: PagamentosService) {}

  @Post("checkout")
  async criarCheckout(@Body("pedidoId") pedidoId: number) {
    return this.pagamentosService.criarCheckoutMercadoPago(pedidoId);
  }
}
