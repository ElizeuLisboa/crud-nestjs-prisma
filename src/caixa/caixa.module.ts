import { Module } from "@nestjs/common";
import { CaixaService } from "./caixa.service";
import { CaixaController } from "./caixa.controller";
import { PrismaModule } from "../prisma/prisma.module";

import { PixModule } from "../pagamentos/pix/pix.module"; // 👈 IMPORTANTE
import { PixService } from "@/pagamentos/pix/pix.service";

@Module({
  imports: [
    PrismaModule,
    PixModule,       // 👈 INJETAR AQUI
  ],
  controllers: [CaixaController],
  providers: [CaixaService, PixService],
})
export class CaixaModule {}
