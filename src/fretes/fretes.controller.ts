import { Controller, Get, Query } from "@nestjs/common";
import { FretesService } from "./fretes.service";

@Controller("fretes")
export class FretesController {
  constructor(private readonly fretesService: FretesService) {}

  @Get("calcular")
  calcular(
    @Query("cepDestino") cepDestino: string,
    @Query("peso") peso: number
  ) {
    return this.fretesService.calcularFrete(cepDestino, Number(peso));
  }
}
