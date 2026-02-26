import { IsArray, ArrayMinSize, ValidateNested, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ItemPedidoDto {
  @IsInt()
  produtoId!: number;

  @IsInt()
  @Min(1)
  quantidade!: number;

}

export class CreatePedidoDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ItemPedidoDto)
  itens!: ItemPedidoDto[];
}

