import { Controller, Post, Body, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../modules/auth/jwt-auth.guard";
import { CaixaService } from "./caixa.service";

@Controller("caixa")
export class CaixaController {
  constructor(private readonly caixaService: CaixaService) {}

  @Post("finalizar")
  @UseGuards(JwtAuthGuard)
  async finalizar(@Body() body: any, @Request() req: any) {
    console.log(req.user);
    return this.caixaService.finalizarVenda(body, req.user);
  }
}
