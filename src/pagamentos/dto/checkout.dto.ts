import { Type } from 'class-transformer';
import { ValidateNested, IsInt, ArrayMinSize } from 'class-validator';
import { CheckoutItemDto } from './checkout-item.dto';

export class CheckoutDto {
  @IsInt()
  clienteId: number;

  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  @ArrayMinSize(1)
  items: CheckoutItemDto[];
}

