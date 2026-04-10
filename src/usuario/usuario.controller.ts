import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { LoginUsuarioDto } from "./dto/login-usuario.dto";

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post("login")
  login(@Body() dto: LoginUsuarioDto) {
    return this.usuarioService.login(dto);
  }
}