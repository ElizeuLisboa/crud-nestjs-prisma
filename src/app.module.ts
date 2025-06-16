import { Module } from '@nestjs/common';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';

@Module({
  imports: [],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class AppModule {}
