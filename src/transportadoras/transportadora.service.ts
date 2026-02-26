import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
// import { CreateTransportadoraDto } from './dto/create-transportadora.dto';

@Injectable()
export class TransportadoraService {
  constructor(private prisma: PrismaService) {}

  // Criar transportadora
  async create(data: any) {
  return this.prisma.transportadora.create({
    data: {
      numero: data.numero,
      nome: data.nome,
      cnpj: data.cnpj,
      telefone: data.telefone,
      fretePadrao: data.frete ? Number(data.frete) : null,
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
      tipoVeiculo: data.tipoVeiculo,
    },
  });
}

  // async create(data: { nome: string; cnpj?: string; telefone?: string }) {
  //   // Forçando valores padrão caso cnpj ou telefone não sejam passados
  //   const transportadoraData = {
  //     nome: data.nome,
  //     cnpj: data.cnpj ?? '',       // vazio se não informado
  //     telefone: data.telefone ?? '', // vazio se não informado
  //   };

  //   return this.prisma.transportadora.create({ data: transportadoraData });
  // }

  // Buscar todas as transportadoras
  async findAll() {
    return this.prisma.transportadora.findMany();
  }

  // Buscar transportadora pelo ID
  async findOne(id: number) {
    return this.prisma.transportadora.findUnique({ where: { id } });
  }

  // Atualizar transportadora
  async update(
    id: number,
    data: { nome?: string; cnpj?: string; telefone?: string }
  ) {
    return this.prisma.transportadora.update({
      where: { id },
      data: {
        nome: data.nome,
        cnpj: data.cnpj,
        telefone: data.telefone,
      },
    });
  }

  // Deletar transportadora
  async remove(id: number) {
    return this.prisma.transportadora.delete({ where: { id } });
  }
}
