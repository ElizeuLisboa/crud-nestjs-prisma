import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoginUsuarioDto } from "./dto/login-usuario.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  // async login(dto: LoginUsuarioDto) {
  //   const user = await this.prisma.usuario.findUnique({
  //     where: { email: dto.email },
  //   });

  //   if (!user) {
  //     throw new UnauthorizedException("Usuário não encontrado");
  //   }

  //   if (!dto.email) {
  //     throw new UnauthorizedException("Email não enviado");
  //   }

  //   console.log("DTO:", dto);

  //   const senhaValida = await bcrypt.compare(dto.password, user.password);

  //   if (!senhaValida) {
  //     throw new UnauthorizedException("Senha inválida");
  //   }

  //   return {
  //     id: user.id,
  //     nome: user.nome,
  //     role: user.role,
  //     empresaId: user.empresaId,
  //   };
  // }

  async login(dto: LoginUsuarioDto) {
    console.log("DTO:", dto);

    if (!dto.email) {
      throw new UnauthorizedException("Email não enviado");
    }

    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });

    if (!user || !user.password) {
      throw new UnauthorizedException("Usuário não encontrado");
    }

    const senhaValida = await bcrypt.compare(dto.password, user.password);

    if (!senhaValida) {
      throw new UnauthorizedException("Senha inválida");
    }

    return {
      id: user.id,
      nome: user.nome,
      role: user.role,
      empresaId: user.empresaId,
    };
  }
}
