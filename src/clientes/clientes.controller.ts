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
  BadRequestException,
  Req,
} from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import { JwtAuthGuard } from "../modules/auth/jwt-auth.guard";
import { RolesGuard } from "../modules/auth/roles.guard";
import { Roles } from "../modules/auth/roles.decorator";
import { User } from "../modules/auth/user.decorator";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { CadastroRapidoDto } from "./dto/cadastro-rapido.dto";
import { AtualizarCadastroRapidoDto } from "./dto/atualizar-cadastro-rapido.dto";
import { CreateClientePublicoDto } from "./dto/create-cliente-publico.dto";

@Controller("clientes")
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  getPerfil(@User() user: any) {
    return { perfil: user };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERUSER")
  @Get()
  findAll(@Req() req: any) {
    return this.clientesService.findAll(req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERUSER", "CAIXA")
  @Get("buscar-cpf/:cpf")
  async buscarPorCpf(@Param("cpf") cpf: string, @Req() req: any) {
    if (!cpf || cpf.trim() === "") {
      throw new BadRequestException("CPF é obrigatório");
    }

    return this.clientesService.buscarPorCpf(cpf, req.user);
  }

  // @Get("buscar-cpf/:cpf")
  // async buscarPorCpf(@Param("cpf") cpf: string, req: any) {
  //   if (!cpf || cpf.trim() === "") {
  //     throw new BadRequestException("CPF é obrigatório");
  //   }
  //   return this.clientesService.buscarPorCpf(cpf  , req.user);
  // }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERUSER")
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number, @Req() req: any) {
    return this.clientesService.findOne(id, req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERUSER", "CAIXA")
  @Post("cadastro-rapido")
  async cadastroRapido(@Body() dto: CreateClienteDto, @Req() req: any) {
    return this.clientesService.cadastroRapido(dto, req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERUSER", "CAIXA")
  @Put("cadastro-rapido/:cpf")
  async atualizarCadastroRapido(
    @Param("cpf") cpf: string,
    @Body() body: AtualizarCadastroRapidoDto,
    @Req() req: any,
  ) {
    return this.clientesService.atualizarCadastroRapido(cpf, body, req.user);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles("ADMIN", "SUPERUSER", "CAIXA")
  // @Put("cadastro-rapido/:cpf")
  // async atualizarCadastroRapido(
  //   @Param("cpf") cpf: string,
  //   @Body() body: AtualizarCadastroRapidoDto,
  // ) {
  //   return this.clientesService.atualizarCadastroRapido(cpf, body);
  // }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERUSER")
  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateClienteDto: UpdateClienteDto,
    @Request() req: any,
  ) {
    if (
      updateClienteDto.role && 
      req.user?.role !== "SUPERUSER"
    ) {
      throw new ForbiddenException(
        "Apenas SUPERUSER pode alterar o campo role",
      );
    }

    return this.clientesService.update(id, updateClienteDto, req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERUSER")
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number, @Request() req: any) {
    const cliente = await this.clientesService.findOne(id, req.user);

    if (!cliente) {
      throw new NotFoundException("Cliente não encontrado");
    }

    if (cliente.role === "SUPERUSER") {
      throw new ForbiddenException("Você não pode excluir um SUPERUSER");
    }

    return this.clientesService.remove(id, req.user);
  }

  @Post("auto-cadastro")
  async autoCadastro(@Body() dto: CreateClientePublicoDto) {
    return this.clientesService.autoCadastro(dto);
  }
}
