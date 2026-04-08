import { IsNumber, IsString, Min, IsNotEmpty, IsOptional } from "class-validator";

export class GerarPixDto {
  @IsNumber()
  @Min(0.01)
  valor?: number;

  @IsNumber()
  @IsOptional()
  pedidoId?: number;

  @IsString()
  @IsNotEmpty()
  nome?: string;

  @IsString()
  @IsNotEmpty()
  descricao?: string;

  @IsNumber()
  @IsOptional()
  clienteId?: number;
}

