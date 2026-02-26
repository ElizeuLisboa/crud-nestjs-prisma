import { IsString, IsNotEmpty, IsNumber, Min, IsOptional } from "class-validator";

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsOptional()
  categoria?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  estoque?: number;

  @IsString()
  @IsOptional()
  codigoBarras?: string;
}
