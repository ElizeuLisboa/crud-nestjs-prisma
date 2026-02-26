// import { IsString, IsOptional, IsNumber } from 'class-validator';

// export class CreateTransportadoraDto {
//   @IsString()
//   nome: string;

//   @IsString()
//   cnpj: string;

//   @IsString()
//   telefone: string;

//   @IsOptional()
//   @IsNumber({}, { message: "frete deve ser um número" })
//   frete?: number;
// }

import { IsString, IsOptional, IsNumber } from "class-validator";

export class CreateTransportadoraDto {
  @IsString()
  numero: string;

  @IsString()
  nome: string;

  @IsString()
  cnpj: string;

  @IsString()
  telefone: string;

  @IsOptional()
  @IsNumber({}, { message: "Frete deve ser um número" })
  frete?: number;

  @IsOptional()
  @IsString()
  cep?: string;

  @IsOptional()
  @IsString()
  logradouro?: string;

  @IsOptional()
  @IsString()
  bairro?: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsString()
  tipoVeiculo?: string;
}
