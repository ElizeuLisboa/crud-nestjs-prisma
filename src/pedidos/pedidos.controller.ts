import { Controller, 
  Post, 
  Body, 
  Get, 
  UseGuards, 
  Request } from "@nestjs/common";
import { PedidosService } from "./pedidos.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsePipes, ValidationPipe } from "@nestjs/common";

@Controller("pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

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

  // // 👇 Endpoint temporário para apagar todos os pedidos
  // @Delete("apagar-todos")
  // async apagarTodosPedidos() {
  //   return this.pedidosService.apagarTodos();
  // }
}

