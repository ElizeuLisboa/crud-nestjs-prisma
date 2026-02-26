import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Req,
  ForbiddenException,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  UnauthorizedException,
  RequestMapping,
  Request,
} from "@nestjs/common";
import { PedidosService } from "./pedidos.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { JwtAuthGuard } from "../modules/auth/jwt-auth.guard";
import { UsePipes, ValidationPipe } from "@nestjs/common";
import { PagamentosService } from "../pagamentos/pagamentos.service";
import { FakeAuthGuard } from "./guards/fake-auth.guard";
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Patch, Param } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ParseIntPipe } from "@nestjs/common";

@Controller("pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  criarPedido(@Req() req: any, @Body() body: CreatePedidoDto) {
    return this.pedidosService.criarPedido(req.user, body);
  }

  @Get("meus")
  @UseGuards(JwtAuthGuard)
  async listarMeusPedidos(@Req() req: any) {
    return this.pedidosService.findByCliente(req.user.id);
  }

  @Get("todos")
  @UseGuards(JwtAuthGuard)
  async listarTodosPedidos(@Req() req: any) {
    const user = req.user;
    if (!["ADMIN", "SUPERUSER"].includes(user.role)) {
      throw new ForbiddenException("Acesso negado");
    }
    return this.pedidosService.listarTodos();
  }

  @UseGuards(JwtAuthGuard)
  @Post(":id/comprovante")
  @UseInterceptors(FileInterceptor("file"))
  async enviarComprovante(
    @Param("id") id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { nomeRecebedor: string; entregadorNome: string },
  ) {
    const { nomeRecebedor, entregadorNome } = body;

    return this.pedidosService.confirmarEntrega(
      id,
      nomeRecebedor,
      entregadorNome,
      file,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post("site")
  async criarPedidoSite(@Body() body: any, @Req() req: any) {
    if (!req.user) {
      throw new UnauthorizedException("É necessário estar logado");
    }

    const pedido = await this.pedidosService.criarPedidoSite(body, req.user.id);

    return { pedido };
  }

  @Post("venda-caixa")
  async criarVendaCaixa(@Body() body: CreatePedidoDto, @Req() req: any) {
    const clienteId = req.user.sub; // vem do JWT
    return this.pedidosService.criarVendaCaixa(body, clienteId);
  }

  @Get(":id")
  buscar(@Param("id", ParseIntPipe) id: number) {
    console.log("ID recebido:", id, typeof id);
    return this.pedidosService.buscarPorId(id);
  }

}
