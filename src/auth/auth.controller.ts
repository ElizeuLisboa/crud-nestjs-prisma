import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Get,
  UseGuards,
  Request,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./login.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { Request as ExpressRequest } from "express";
import { User } from "../auth/user.decorator";


@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    const token = await this.authService.login(loginDto);
    if (!token) {
      throw new UnauthorizedException("Credenciais inválidas");
    }
    return token; // já está no formato { access_token: token }
  }

  @UseGuards(JwtAuthGuard)
  @Get("perfil")
  getPerfil(@User() user: any) {
    return { perfil: user };
  }
}
