import { Controller, Post, Body, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../modules/auth/jwt-auth.guard";
import { CaixaService } from "./caixa.service";

@Controller("caixa")
export class CaixaController {
  constructor(private readonly caixaService: CaixaService) {}

  @Post("finalizar")
  @UseGuards(JwtAuthGuard)
  async finalizarVenda(@Body() body: any, @Request() req: any) {
    const operadorId = req.user.sub;
    return this.caixaService.finalizarVenda({
      ...body,
      operadorId,
    });
    // return this.caixaService.finalizarVenda(body, req.user);
  }
}
