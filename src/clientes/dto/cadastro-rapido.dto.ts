import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CadastroRapidoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;
}
