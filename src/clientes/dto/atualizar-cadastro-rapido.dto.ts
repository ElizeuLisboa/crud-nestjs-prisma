import { IsOptional, IsString, IsEmail } from "class-validator";

export class AtualizarCadastroRapidoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telefone?: string;
}
