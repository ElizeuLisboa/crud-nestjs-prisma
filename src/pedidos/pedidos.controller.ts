import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  // Request,
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
import { Request } from "express";
import { getEmpresaId } from "../utils/empresa.util";

@Controller("pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post("site")
  @UseGuards(JwtAuthGuard)
  criarPedidoSite(@Req() req: any, @Body() body: CreatePedidoDto) {
    return this.pedidosService.create(body, req.user); // ✅ CORRETO
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
    return this.pedidosService.findByCliente(req.user.id, req.user);
  }

  // 📊 Listar todos os pedidos (admin)
  @UseGuards(JwtAuthGuard)
  @Get("todos")
  listarTodos(@Req() req: any) {
    return this.pedidosService.listarTodos(req.user);
  }

  // 🧾 Venda direta no caixa (PDV)
  @UseGuards(JwtAuthGuard)
  @Post("venda-caixa")
  criarVendaCaixa(@Body() body: CreatePedidoDto, @Req() req: any) {
    const clienteId = req.user.id;
    return this.pedidosService.criarVendaCaixa(body, req.user);
  }

  // 🔎 Buscar pedido por ID
  @Get(":id")
  buscarPorId(@Param("id") id: string, @Req() req: Request) {
    return this.pedidosService.buscarPorId(Number(id), req.user);
  }

  @Get()
  listar(@Req() req: any) {
    const empresaId = getEmpresaId(req.user, req);
    return this.pedidosService.listarTodos(empresaId);
  }
}
