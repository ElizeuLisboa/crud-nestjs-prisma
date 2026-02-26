import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import * as bcrypt from "bcrypt";
import { CreateClientePublicoDto } from "./dto/create-cliente-publico.dto";

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findOne(id: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { id },
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    return cliente;
  }

  async update(id: number, data: UpdateClienteDto) {
    const updateData: any = { ...data };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.cliente.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.cliente.delete({
      where: { id },
    });
  }

  async buscarPorCpf(cpf: string) {
    return this.prisma.cliente.findUnique({
      where: { cpf },
    });
  }

  async cadastroRapido(data: {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
  }) {
    return this.prisma.cliente.create({
      data: {
        ...data,
        password: await bcrypt.hash("123456@1234", 10), // 🔥 HASH AGORA
        role: "CLIENTE",
        cep: null,
        logradouro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  async atualizarCadastroRapido(cpf: string, data: any) {
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
