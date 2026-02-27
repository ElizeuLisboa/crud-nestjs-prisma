import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  Body,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../../prisma/prisma.service";
import { AuthController } from "./auth.controller";
// import * as bcrypt from "bcryptjs";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validarUsuario(email: string, senha: string) {
    const cliente = await this.prisma.cliente.findUnique({ where: { email } });
    if (!cliente) throw new UnauthorizedException("Usuário não encontrado");

    const senhaCorreta = await bcrypt.compare(senha, cliente.password);
    if (!senhaCorreta) throw new UnauthorizedException("Senha incorreta");

    return cliente;
  }

  async login(loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;

    const cliente = await this.validarUsuario(email, password);

    const payload = {
      sub: cliente.id,
      email: cliente.email,
      nome: cliente.nome,
      role: cliente.role,
      cep: cliente.cep,
      cidade: cliente.cidade,
      estado: cliente.estado,
    };

    const jwt = await this.jwtService.signAsync(payload, { expiresIn: "7d" });

    return {
      cliente: {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        role: cliente.role,
        cep: cliente.cep,
        cidade: cliente.cidade,
        estado: cliente.estado,
      },
      jwt,
    };
  }
}
