import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import * as bcrypt from "bcrypt";
import { CreateClientePublicoDto } from "./dto/create-cliente-publico.dto";
import { PrismaClient, Role } from "@prisma/client";

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  // async findAll() {
  //   return this.prisma.cliente.findMany();
  // }

  async findAll(user: any) {
    const whereBase =
      user.role === "SUPERUSER" ? {} : { empresaId: user.empresaId };

    return this.prisma.cliente.findMany({
      where: {
        ...whereBase,
      },
    });
  }

  async findOne(id: number, user: any) {
    const whereBase =
      user.role === "SUPERUSER" 
      ? 
      {} : { empresaId: user.empresaId };

    const cliente = await this.prisma.cliente.findFirst({
      where: {
        ...whereBase,
      },
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    return cliente;
  }

  async update(id: number, data: UpdateClienteDto, user: any) {
    const updateData: any = { ...data };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.cliente.update({
      where: {
        id,
        empresaId: user.empresaId,
      },
      data: updateData,
    });
  }

  async remove(id: number, user: any) {
    return this.prisma.cliente.deleteMany({
      where: {
        id,
        empresaId: user.empresaId,
      },
    });
  }

  async buscarPorCpf(cpf: string, user: any) {
    return this.prisma.cliente.findFirst({
      where: {
        cpf,
        empresaId: user.empresaId,
      },
    });
  }

  async cadastroRapido(data: CreateClienteDto, user: any) {
    return this.prisma.cliente.create({
      data: {
        nome: data.nome!,
        email: data.email!,
        cpf: data.cpf!,
        telefone: data.telefone!,

        password: await bcrypt.hash("123456@1234", 10),
        role: Role.CLIENTE,

        empresa: {
          connect: { id: user.empresaId }, // 🔥 CORRETO
        },

        cep: null,
        logradouro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  async atualizarCadastroRapido(cpf: string, data: any, user: any) {
    const updateData = { ...data };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.cliente.update({
      where: { cpf },
      data: updateData,
    });
  }

  async autoCadastro(dto: CreateClientePublicoDto) {
    const existe = await this.prisma.cliente.findFirst({
      where: {
        OR: [{ email: dto.email }, { cpf: dto.cpf }],
      },
    });

    if (existe) {
      throw new BadRequestException("Email ou CPF já cadastrados");
    }

    const hash = await bcrypt.hash(dto.password, 10);

    const cliente = await this.prisma.cliente.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        cpf: dto.cpf,
        telefone: dto.telefone,
        empresa: {
          connect: { id: 1 }, // empresa padrão
        },
        cep: dto.cep,
        logradouro: dto.logradouro,
        cidade: dto.cidade,
        estado: dto.estado,
        password: hash,
        role: "CLIENTE",
      },
    });

    return {
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
    };
  }
}
