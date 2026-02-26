import { Module } from "@nestjs/common";
import { PedidosService } from "./pedidos.service";
import { PedidosController } from "./pedidos.controller";
import { PrismaService } from "../prisma/prisma.service";
import { PagamentosModule } from "../pagamentos/pagamentos.module"; // <-- importante!
import { AuthModule } from "@/modules/auth/auth.module";

@Module({
  imports: [PagamentosModule,AuthModule],//adiciona isso
  controllers: [PedidosController],
  providers: [PedidosService, PrismaService],
  exports: [PedidosService],
})









// @Module({
//   providers: [PedidosService, PrismaService],
//   exports: [PedidosService], 
//   // imports: [PagamentosModule],
//   // controllers: [PedidosController],
// })
export class PedidosModule {}

