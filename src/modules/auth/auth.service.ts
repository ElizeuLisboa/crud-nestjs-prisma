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
import { LoginUnificadoDto } from "./login-unificado.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async loginUnificado(dto: LoginUnificadoDto) {
    const { login, password } = dto;
    
    // 🔎 1. BUSCAR CLIENTE
    const cliente = await this.prisma.cliente.findFirst({
      where: {
        OR: [{ email: login }, { telefone: login }, { nome: login }],
      },
    });

    if (cliente) {
      // 🔐 validar senha (ajuste conforme seu hash)
      const senhaValida = await bcrypt.compare(password, cliente.password);

      if (!senhaValida) {
        throw new UnauthorizedException("Senha inválida");
      }

      const token = this.jwtService.sign({
        sub: cliente.id,
        tipo: "cliente",
      });

      return {
        token,
        user: cliente,
        tipo: "cliente",
      };
    }

    // 🔎 2. BUSCAR USUARIO
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        OR: [{ email: login }, { nome: login }],
      },
    });

    if (usuario) {
      const senhaValida = await bcrypt.compare(password, usuario.password);

      if (!senhaValida) {
        throw new UnauthorizedException("Senha inválida");
      }

      const token = this.jwtService.sign({
        sub: usuario.id,
        role: usuario.role,
        empresaId: usuario.empresaId,
        tipo: "usuario",
      });

      return {
        token,
        user: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          role: usuario.role,
          empresaId: usuario.empresaId,
        },
        tipo: "usuario",
      };
    }

    // ❌ NÃO ACHOU NADA
    throw new UnauthorizedException("Credenciais inválidas");
  }

  async validarUsuario(email: string, senha: string) {
    const cliente = await this.prisma.cliente.findUnique({
      where: { email },
      select: {
        id: true,
        nome: true,
        email: true,
        password: true,
        role: true,
        empresaId: true, // 👈 IMPORTANTE
        cep: true,
        cidade: true,
        estado: true,
      },
    });

    if (!cliente) {
      throw new UnauthorizedException("Usuário não encontrado");
    }

    const senhaCorreta = await bcrypt.compare(senha, cliente.password);
    if (!senhaCorreta) {
      throw new UnauthorizedException("Senha incorreta");
    }

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
      empresaId: cliente.empresaId,
      cep: cliente.cep,
      cidade: cliente.cidade,
      estado: cliente.estado,
    };
    console.log("?? PAYLOAD JWT RECEBIDO:", payload);
    const jwt = await this.jwtService.signAsync(payload, { expiresIn: "4d" });

    return {
      cliente: {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        role: cliente.role,
        empresaId: cliente.empresaId, //
        cep: cliente.cep,
        cidade: cliente.cidade,
        estado: cliente.estado,
      },
      jwt,
    };
  }
}
