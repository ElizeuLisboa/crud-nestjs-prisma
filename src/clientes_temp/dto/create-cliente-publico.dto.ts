import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateClientePublicoDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  telefone: string;

  @IsString()
  cep: string;

  @IsString()
  logradouro: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  @MinLength(6)
  password: string;
}
