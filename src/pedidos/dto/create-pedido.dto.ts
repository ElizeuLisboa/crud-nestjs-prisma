import { IsArray, 
  ArrayMinSize, IsNumber, IsOptional, 
  IsString ,
  ValidateNested, 
  IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ItemPedidoDto {
  @IsInt()
  produtoId!: number;

  @IsInt()
  @Min(1)
  quantidade!: number;

  @IsOptional()
  @IsNumber()
  preco?: number; // 👈 ESSENCIAL

    // 🔥 NOVO
  @IsNumber()
  @IsOptional()
  fator?: number;

  // 🔥 OPCIONAL (recomendo)
  @IsString()
  @IsOptional()
  unidade?: string;

}

export class CreatePedidoDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ItemPedidoDto)
  itens!: ItemPedidoDto[];
}

