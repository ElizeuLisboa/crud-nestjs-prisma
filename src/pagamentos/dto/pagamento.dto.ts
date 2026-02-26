import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PagamentoCreditoDTO {
  @IsNumber()
  pedidoId: number;

  @IsNumber()
  clienteId: number;

  @IsNumber()
  valor: number;

  @IsString()
  descricao: string; // ← ADICIONADO

  @IsNumber()
  parcelas: number;

  @IsOptional()
  simulacaoParcelada?: boolean;
}
