import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Request,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { User } from "../auth/user.decorator";

@Controller("clientes")
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  getPerfil(@User() user: any) {
    return { perfil: user };
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.clientesService.findOne(id);
  }

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateClienteDto: UpdateClienteDto,
    @Request() req: any
  ) {
    // Se tentar alterar role, só SUPERUSER pode
    if (updateClienteDto.role && req.user?.role !== "SUPERUSER") {
      throw new ForbiddenException(
        "Apenas SUPERUSER pode alterar o campo role"
      );
    }

    // Opcional: proteger para que USER não possa atualizar clientes
    if (!["ADMIN", "SUPERUSER"].includes(req.user?.role)) {
      throw new ForbiddenException(
        "Apenas administradores podem atualizar clientes"
      );
    }

    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  async remove(@Param("id", ParseIntPipe) id: number, @Request() req: any) {
    const cliente = await this.clientesService.findOne(id);

    if (!cliente) {
      throw new NotFoundException("Cliente não encontrado");
    }

    // Impede a exclusão de SUPERUSER
    if (cliente.role === "SUPERUSER") {
      throw new ForbiddenException("Você não pode excluir um SUPERUSER");
    }

    // Permite apenas ADMIN ou SUPERUSER excluir
    if (!["ADMIN", "SUPERUSER"].includes(req.user?.role)) {
      throw new ForbiddenException(
        "Apenas administradores podem excluir clientes"
      );
    }

    return this.clientesService.remove(id);
  }
}
