import { IsEmail, IsString, MinLength, Length } from "class-validator";
import { IsCPF } from "../../validators/is-cpf.validator";

export class CreateClientePublicoDto {
  @IsString()
  @Length(3, 100)
  nome!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @Length(11, 11)
  @IsCPF()
  cpf!: string;

  @IsString()
  telefone!: string;

  @IsString()
  cep!: string;

  @IsString()
  logradouro!: string;

  @IsString()
  cidade!: string;

  @IsString()
  estado!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}