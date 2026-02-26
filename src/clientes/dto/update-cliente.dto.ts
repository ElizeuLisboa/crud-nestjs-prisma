import { IsEmail, IsOptional, ValidateIf, IsString, Length, MaxLength, MinLength,
  IsEnum, } from "class-validator";
import { Role } from "@prisma/client";
import { IsCPF } from "src/validators/is-cpf.validator";

export class UpdateClienteDto {
  @IsOptional()
  @IsString()
  @Length(2, 100)
  nome?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @ValidateIf((obj) => obj.cpf != null && process.env.VALIDAR_CPF === "true")
  @IsCPF({ message: "CPF inválido" })
  cpf?: string | null;


  @IsOptional()
  @IsString()
  @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres" })
  @MaxLength(100, { message: "A senha deve ter no máximo 100 caracteres" })
  password?: string;

  @IsOptional()
  @IsEnum(Role, { message: "Role deve ser USER, ADMIN ou SUPERUSER" })
  role?: Role;

  @IsOptional()
  @IsString()
  logradouro?: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsString()
  @IsOptional()
  telefone?: string;

  @IsOptional()
  @IsString()
  cep?: string;
}
