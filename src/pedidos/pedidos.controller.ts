import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  UseGuards,
  Request,
} from "@nestjs/common";
import { PedidosService } from "./pedidos.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsePipes, ValidationPipe } from "@nestjs/common";
import { PagamentosService } from "../pagamentos/pagamentos.service";

@Controller("pedidos")
export class PedidosController {
  constructor(
    private readonly pedidosService: PedidosService,
    private readonly stripeService: PagamentosService // <-- Adicione isso
  ) {}

  @Post("checkout")
  async checkout(@Body() body: any, @Req() req: any) {
    const sessionData = await this.stripeService.criarSessaoCheckout(
      body.itens,
      body.clienteId
    );

    console.log("SessionData retornado:", sessionData);
    return sessionData;
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createPedidoDto: CreatePedidoDto, @Request() req: any) {
    const clienteId = req.user?.sub;
    return this.pedidosService.create(createPedidoDto, clienteId);
  }

  @Get()
  findAll() {
    return this.pedidosService.findAll();
  }

  @Get("meus")
  @UseGuards(JwtAuthGuard)
  getMeusPedidos(@Request() req: any) {
    const clienteId = req.user?.sub;
    return this.pedidosService.findByCliente(clienteId);
  }
}
