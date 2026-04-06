import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmpresaService } from "./empresa.service";

@Controller("empresas")
export class EmpresaController {
  constructor(private empresaService: EmpresaService) {}

  @Post()
  async criar(@Body() data: any) {
    return this.empresaService.create(data);
  }

  @Get()
  async listar() {
    return this.empresaService.findAll();
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.empresaService.delete(Number(id));
  }

  @Patch(":id/toggle")
  toggle(@Param("id") id: string, @Body("ativa") ativa: boolean) {
    return this.empresaService.toggle(Number(id), ativa);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() data: any) {
    return this.empresaService.update(Number(id), data);
  }
}
