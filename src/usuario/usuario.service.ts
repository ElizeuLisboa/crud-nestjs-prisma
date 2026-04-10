import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { LoginUsuarioDto } from "./dto/login-usuario.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsuarioService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginUsuarioDto) {
    if (!dto.email) {
      throw new UnauthorizedException("Email não enviado");
    }

    console.log("Buscando usuário...");
    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });

    if (!user || !user.password) {
      throw new UnauthorizedException("Usuário não encontrado");
    }

    // const senhaValida = await bcrypt.compare(dto.password, user.password);

    const payload = {
      sub: user.id,
      role: user.role,
      empresaId: user.empresaId,
    };

    const token = this.jwtService.sign(payload);

    // if (!senhaValida) {
    //   throw new UnauthorizedException("Senha inválida");
    // }

    return {
      token,
      usuario: {
        id: user.id,
        nome: user.nome,
        role: user.role,
        empresaId: user.empresaId,
      },
    };

    // return {
    //   id: user.id,
    //   nome: user.nome,
    //   role: user.role,
    //   empresaId: user.empresaId,
    // };
  }
}
