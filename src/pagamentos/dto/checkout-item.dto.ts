import { Expose } from 'class-transformer';
import { IsInt, IsString, IsNumber } from 'class-validator';

export class CheckoutItemDto {
  @IsInt()
  produtoId: number;

  @IsString()
  nome: string;

  @IsNumber()
  preco: number;

  @IsInt()
  quantidade: number;
}

