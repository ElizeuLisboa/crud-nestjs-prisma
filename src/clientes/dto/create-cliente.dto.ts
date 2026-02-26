import { IsEmail, IsOptional, ValidateIf, IsString, Length, MaxLength,
  MinLength, IsEnum, } from "class-validator";
import { Role } from "src/common/enums/role";
import { IsCPF } from "src/validators/is-cpf.validator";

export class CreateClienteDto {
  @IsString()
  cpf: string;

  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  telefone: string;
}