import { IsNumber, IsString, Min, IsNotEmpty } from "class-validator";

export class GerarPixDto {
  @IsNumber()
  @Min(0.01)
  valor: number;

  @IsNumber()
  pedidoId: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  clienteId?: number;
}

