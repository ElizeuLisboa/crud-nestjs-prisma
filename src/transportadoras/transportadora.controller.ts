import { Controller, Get, Post, Body } from "@nestjs/common";
import { TransportadoraService } from "./transportadora.service";
import { CreateTransportadoraDto } from "./dto/create-transportadora.dto";

@Controller("transportadoras")
export class TransportadoraController {
  constructor(private service: TransportadoraService) {}
  @Post()
  create(@Body() body: CreateTransportadoraDto) {
    return this.service.create(body);
  }

  // @Post()
  // create(@Body() body: { nome: string; cnpj?: string; telefone?: string; frete?: number}) {
  //   return this.service.create(body);
  // }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
