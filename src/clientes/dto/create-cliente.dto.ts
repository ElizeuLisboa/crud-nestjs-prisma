import {
  IsEmail,
  IsOptional,
  IsString,
  Length,
} from "class-validator";
import { IsCPF } from "../../validators/is-cpf.validator";

export class CreateClienteDto {
  @IsString()
  @Length(11, 11)
  @IsCPF()
  cpf!: string;

  @IsString()
  @Length(3, 100)
  nome!: string | undefined;

  @IsEmail()
  email!: string | undefined;

  @IsString()
  @IsOptional()
  telefone!: string;
}