import { IsString, IsNumber, IsOptional, IsObject, Min } from "class-validator";

export class CreateAuditoriaDto {
  @IsString()
  acao: string; // "SANGRIA", "SUPRIMENTO", etc

  @IsOptional()
  @IsNumber()
  @Min(0.01)
  valor?: number;

  @IsOptional()
  @IsString()
  detalhes?: string;

  @IsOptional()
  @IsNumber()
  referenciaId?: number;

  @IsOptional()
  @IsObject()
  dadosExtras?: any;
}
