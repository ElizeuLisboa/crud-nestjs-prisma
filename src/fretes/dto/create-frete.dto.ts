import { IsNumber, IsOptional, Min } from "class-validator";

export class CreateFreteDto {
  @IsNumber()
  transportadoraId: number;

  @IsNumber()
  @Min(0)
  pesoMin: number;

  @IsNumber()
  @Min(0)
  pesoMax: number;

  @IsNumber()
  valor: number;

  @IsOptional()
  @IsNumber()
  prazoEntrega?: number;
}
