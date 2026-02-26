import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAuditoriaDto } from "./dto/create-sangria.dto";

@Injectable()
export class AuditoriaService {
  constructor(private prisma: PrismaService) {}

  async criar(
    operadorId: number,
    autorizadoPor: number | null,
    data: {
      acao: string;
      valor?: number;
      detalhes?: string;
      referenciaId?: number;
      dadosExtras?: any;
    }
  ) {
    return this.prisma.auditoriaAcao.create({
      data: {
        acao: data.acao,
        valor: data.valor ?? null,
        detalhes: data.detalhes ?? null,
        referenciaId: data.referenciaId ?? null,
        dadosExtras: data.dadosExtras ?? null,
        operadorId,
        autorizadoPor,
      },
    });
  }

  // async criar(
  //   operadorId: number,
  //   autorizadoPor: number | null,
  //   dto: CreateAuditoriaDto,
  // ) {
  //   return this.prisma.auditoriaAcao.create({
  //     data: {
  //       acao: dto.acao,
  //       valor: dto.valor ?? null,
  //       detalhes: dto.detalhes ?? null,
  //       referenciaId: dto.referenciaId ?? null,
  //       dadosExtras: dto.dadosExtras ?? null,
  //       operadorId,
  //       autorizadoPor,
  //     },
  //   });
  // }
}

// async criar(
//   operadorId: number,
//   autorizadoPor: number | null,
//   dto: CreateAuditoriaDto,
// ) {
//   return this.prisma.auditoriaAcao.create({
//     data: {
//       acao: dto.acao,
//       valor: dto.valor ?? null,
//       detalhes: dto.detalhes ?? null,
//       referenciaId: dto.referenciaId ?? null,
//       dadosExtras: dto.dadosExtras ?? null,
//       operadorId,
//       autorizadoPor,
//     },
//   });
// }
