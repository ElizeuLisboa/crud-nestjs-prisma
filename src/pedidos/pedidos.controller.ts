import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Request,
  ForbiddenException,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  UnauthorizedException,
  Param,
  ParseIntPipe,
} from "@nestjs/common";

import { PedidosService } from "./pedidos.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { JwtAuthGuard } from "../modules/auth/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";

@Controller("pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post("site")
  @UseGuards(JwtAuthGuard)
  criarPedidoSite(@Req() req: any, @Body() body: any) {
    console.log("🔥 PASSOU NO CONTROLLER");
    return this.pedidosService.criarPedido(req.user, body);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  criarPedido(@Req() req: any, @Body() body: CreatePedidoDto) {
    return this.pedidosService.create(body, req.user);
  }

  // 📦 Pedidos do cliente logado
  @UseGuards(JwtAuthGuard)
  @Get("meus")
  listarMeusPedidos(@Req() req: any) {
    return this.pedidosService.findByCliente(req.user.id);
  }

  // 📊 Listar todos os pedidos (admin)
  @UseGuards(JwtAuthGuard)
  @Get("todos")
  listarTodosPedidos(@Req() req: any) {
    const user = req.user;

    if (!["ADMIN", "SUPERUSER"].includes(user.role)) {
      throw new ForbiddenException("Acesso negado");
    }

    return this.pedidosService.listarTodos();
  }

  // 📷 Upload comprovante de entrega
  @UseGuards(JwtAuthGuard)
  @Post(":id/comprovante")
  @UseInterceptors(FileInterceptor("file"))
  enviarComprovante(
    @Param("id", ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { nomeRecebedor: string; entregadorNome: string },
  ) {
    return this.pedidosService.confirmarEntrega(
      id,
      body.nomeRecebedor,
      body.entregadorNome,
      file,
    );
  }

  // 🧾 Venda direta no caixa (PDV)
  @UseGuards(JwtAuthGuard)
  @Post("venda-caixa")
  criarVendaCaixa(@Body() body: CreatePedidoDto, @Req() req: any) {
    const clienteId = req.user.id;
    return this.pedidosService.criarVendaCaixa(body, clienteId);
  }

  // 🔎 Buscar pedido por ID
  @Get(":id")
  buscar(@Param("id", ParseIntPipe) id: number) {
    return this.pedidosService.buscarPorId(id);
  }
}
