import { Module } from "@nestjs/common";
import { AuditoriaService } from "./auditoria.service";
import { AuditoriaController } from "./auditoria.controller";
import { PrismaService } from "../prisma/prisma.service";
import { AuthModule } from "../modules/auth/auth.module";

@Module({
  controllers: [AuditoriaController],
  providers: [AuditoriaService, PrismaService],
  imports: [AuthModule],
})
export class AuditoriaModule {}
