import { IsNotEmpty, IsString, IsEmail, Length } from "class-validator";
import { IsCPF } from "../../validators/is-cpf.validator";

export class CadastroRapidoDto {
  @IsNotEmpty()
  @IsString()
  nome!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  @IsCPF()
  cpf!: string;

  @IsNotEmpty()
  @IsString()
  telefone!: string;
}