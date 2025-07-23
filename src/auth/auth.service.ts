import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { LoginDto } from "../auth/login.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  async login(data: LoginDto) {
    const { email, password } = data;
    console.log("Tentando login com:", email);

    const cliente = await this.prisma.cliente.findUnique({
      where: { email },
    });

    if (!cliente) {
      console.log("Cliente não encontrado");
      throw new UnauthorizedException("Credenciais inválidas");
    }

    console.log("Senha no banco:", cliente.password);

    const passwordMatch = await bcrypt.compare(password, cliente.password);
    console.log("Senha bate?", passwordMatch);

    if (!passwordMatch) {
      throw new UnauthorizedException("Credenciais inválidas");
    }

    const payload = {
      sub: cliente.id,
      email: cliente.email,
      nome: cliente.nome,
      role: cliente.role,
      cep: cliente.cep,
      cidade: cliente.cidade,
      estado: cliente.estado,
    };

    const token = this.jwtService.sign(payload);
    console.log("Token gerado:", token);

    return {
      access_token: token,
      usuario: {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        role: cliente.role,
        cep: cliente.cep,
        cidade: cliente.cidade,
        estado: cliente.estado,
      },
    };
  }
}
