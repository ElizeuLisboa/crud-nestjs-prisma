import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import * as bcrypt from "bcrypt";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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

  async create(createClienteDto: CreateClienteDto) {
    const hashedPassword = await bcrypt.hash(createClienteDto.senha, 10);

    try {
      return await this.prisma.cliente.create({
        data: {
          nome: createClienteDto.nome,
          email: createClienteDto.email,
          cpf: createClienteDto.cpf,
          password: hashedPassword,
          // role: createClienteDto.role,
          role: createClienteDto.role ?? 'USER',
          cep: createClienteDto.cep || null,
          cidade: createClienteDto.cidade || null,
          estado: createClienteDto.estado || null,
        },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        const campo = Array.isArray(error.meta?.target)
          ? error.meta.target.join(", ")
          : "campo único";
        throw new ConflictException(`Já existe um cliente com esse ${campo}.`);
      }
      throw error;
    }
  }

  async update(id: number, data: UpdateClienteDto) {
    await this.findOne(id);

    const { senha, ...resto } = data;

    const dadosParaAtualizar: any = { ...resto };

    if (senha) {
      const hashedPassword = await bcrypt.hash(senha, 10);
      dadosParaAtualizar.password = hashedPassword;
    }

    // Garante que campos de endereço sejam atualizados também
    if (resto.cep === undefined) dadosParaAtualizar.cep = null;
    if (resto.cidade === undefined) dadosParaAtualizar.cidade = null;
    if (resto.estado === undefined) dadosParaAtualizar.estado = null;

    return this.prisma.cliente.update({
      where: { id },
      data: dadosParaAtualizar,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
