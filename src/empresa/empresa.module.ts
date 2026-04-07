import { Module } from "@nestjs/common";
import { EmpresaController } from "./empresa.controller";
import { EmpresaService } from "./empresa.service";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [EmpresaController],
  providers: [EmpresaService, PrismaService],
  exports: [EmpresaService], // (opcional, mas bom)
})
export class EmpresaModule {}