import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./modules/auth/auth.module";
import { ClientesModule } from "./clientes/clientes.module";
import { ProdutosModule } from "./produtos/produtos.module";
import { PedidosModule } from "./pedidos/pedidos.module";
import { PagamentosModule } from "./pagamentos/pagamentos.module";
import { PrismaModule } from "./prisma/prisma.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ComprovanteModule } from "./comprovantes/comprovante.module";
import multer from "multer"; //
import { MulterModule } from "@nestjs/platform-express";
import { CaixaModule } from "./caixa/caixa.module";
import { TransportadoraModule } from "./transportadoras/transportadora.module";
import { PixModule } from "./pagamentos/pix/pix.module";
import { AuditoriaModule } from "./auditoria/auditoria.module";



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    ClientesModule,
    ProdutosModule,
    PedidosModule,
    CaixaModule,
    PagamentosModule,
    PixModule,
    DashboardModule,
    ComprovanteModule,
    TransportadoraModule,
    AuditoriaModule,
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
  ],
})
export class AppModule {}
