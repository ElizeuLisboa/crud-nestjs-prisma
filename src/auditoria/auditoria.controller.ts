import { Controller, Query, Post, Body } from "@nestjs/common";
import { AuditoriaService } from "./auditoria.service";
import { CreateAuditoriaDto } from "./dto/create-sangria.dto";

import { Req } from "@nestjs/common";
import { Request } from "express";

@Controller("auditoria")
export class AuditoriaController {
  constructor(private auditoriaService: AuditoriaService) {}

@Post()
async registrar(
  @Query("operadorId") operadorId: number,
  @Query("autorizadoPor") autorizadoPor: number,
  @Body() dto: CreateAuditoriaDto,
  @Req() req: Request
) {
  const user = req.user as any;
  return this.auditoriaService.criar(
    Number(operadorId),
    autorizadoPor ? Number(autorizadoPor) : null,
    user.empresaId, // 🔥 AQUI
    dto // 🔥 agora sim é o data
  );
}
}
