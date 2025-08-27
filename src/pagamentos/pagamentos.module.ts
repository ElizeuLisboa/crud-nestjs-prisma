import { Module } from '@nestjs/common';
import { PagamentosService } from './pagamentos.service';
import { PagamentosController } from './pagamentos.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [PagamentosController],
  providers: [PagamentosService],
  exports: [PagamentosService], // se for usar em outro módulo
})
export class PagamentosModule {}