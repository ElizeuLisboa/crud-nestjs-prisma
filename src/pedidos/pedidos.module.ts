import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PagamentosModule } from '../pagamentos/pagamentos.module';


@Module({
  imports: [PagamentosModule],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}

