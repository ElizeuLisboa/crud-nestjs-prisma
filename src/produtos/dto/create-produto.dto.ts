import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
  ValidateNested,
  IsArray,
} from "class-validator";
import { Type } from "class-transformer";

// 🔥 DTO DAS UNIDADES
export class ProdutoUnidadeDto {
  @IsString()
  @IsNotEmpty()
  tipo!: string; // UN | PC | CX

  @IsNumber()
  fator!: number;

  @IsNumber()
  preco!: number;
}

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price!: number; // 🔥 manter por enquanto

  @IsString()
  @IsNotEmpty()
  image!: string;

    // 🔥 NOVO
  @IsString()
  @IsOptional()
  imagemUrl?: string;

  // 🔥 NOVO
  @IsString()
  @IsOptional()
  fotoUrl?: string;

  @IsNumber()
  @IsOptional()
  categoriaId?: number; 

  @IsNumber()
  @Min(0)
  @IsOptional()
  estoque!: number;

  @IsString()
  @IsOptional()
  codigoBarras?: string;

  @IsString()
  @IsOptional()
  cloudinaryId?: string;

  // 🔥 NOVO CAMPO
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProdutoUnidadeDto)
  @IsOptional()
  unidades?: ProdutoUnidadeDto[];
}

