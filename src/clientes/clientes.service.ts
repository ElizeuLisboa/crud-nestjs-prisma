import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

const prisma = new PrismaClient();

@Injectable()
export class ClientesService {
  async create(data: CreateClienteDto) {
    return prisma.cliente.create({ data });
  }

  async findAll() {
    return prisma.cliente.findMany();
  }

  async findOne(id: number) {
    return prisma.cliente.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateClienteDto) {
    return prisma.cliente.update({ where: { id }, data });
  }

  async remove(id: number) {
    return prisma.cliente.delete({ where: { id } });
  }
}