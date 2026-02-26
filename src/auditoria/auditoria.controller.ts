import { Controller, Query, Post, Body } from "@nestjs/common";
import { AuditoriaService } from "./auditoria.service";
import { CreateAuditoriaDto } from "./dto/create-sangria.dto";

@Controller("auditoria")
export class AuditoriaController {
  constructor(private auditoriaService: AuditoriaService) {}

  @Post()
  async registrar(
    @Query("operadorId") operadorId: number,
    @Query("autorizadoPor") autorizadoPor: number,
    @Body() dto: CreateAuditoriaDto
  ) {
    return this.auditoriaService.criar(
      Number(operadorId),
      autorizadoPor ? Number(autorizadoPor) : null,
      dto
    );
  }
}
