import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ForbiddenException,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PrismaService } from ".."; 
import * as bcrypt from "bcrypt";
import { LoginDto } from "./login.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService
  ) {}

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post("validar-admin")
  async validarAdminLogin(@Body() body: { email: string; password: string }) {
    const user = await this.prisma.cliente.findUnique({
      where: { email: body.email },
    });

    if (!user || !["ADMIN", "SUPERUSER"].includes(user.role)) {
      throw new ForbiddenException("Não autorizado");
    }

    const senhaOk = await bcrypt.compare(body.password, user.password);
    if (!senhaOk) throw new ForbiddenException("Senha incorreta");

    return { id: user.id, nome: user.nome, role: user.role };
  }
}
