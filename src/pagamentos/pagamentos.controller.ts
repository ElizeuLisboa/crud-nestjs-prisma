import {
  Controller,
  Query,
  Get,
  Param,
  Post,
  Req,
  Res,
  Headers,
  Body,
  HttpException,
  HttpStatus,
  Logger,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { Express } from 'express';
import { ConfigService } from "@nestjs/config";
import { PagamentosService } from "./pagamentos.service";
import { Request, Response } from "express";
import { PagamentoCreditoDTO } from "./dto/pagamento.dto";
import { PagarMercadoPagoDto } from "./dto/pagar-mercadopago.dto";
import { MercadoPagoService } from "./mercadopago/mercadopago.service";
import { PrismaService } from "@/prisma/prisma.service";

@Controller("pagamentos")
export class PagamentosController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pagamentosService: PagamentosService
  ) {}

  @Post("webhook/mercadopago")
  async webhook(@Body() body: any) {
    return this.pagamentosService.processarWebhookMP(body);
  }

  @Get("status/:txid")
  async statusPix(@Param("txid") txid: string) {
    return this.pagamentosService.verificarStatusPix(txid);
  }

  @Post("simular/:txid")
  async simularPix(@Param("txid") txid: string) {
    return this.pagamentosService.simularPixPago(txid);
  }

  // frontend chama isso
  @Post("mercadopago/checkout")
  async checkout(@Body("pedidoId") pedidoId: number) {
    return this.pagamentosService.criarCheckoutMercadoPago(pedidoId);
  }

  @Post("mercadopago/cartao")
  async pagarMercadoPago(@Body() dto: any) {
    console.log("RAW BODY:", dto);

    const payload: PagarMercadoPagoDto = {
      pedidoId: Number(dto.pedidoId),
      valor: Number(dto.valor),
      token: dto.token,
      installments: Number(dto.installments),
      payer: dto.payer,
    };

    console.log("DTO TRATADO:", payload);

    return this.pagamentosService.pagarComCartao(payload);
  }

  
}
