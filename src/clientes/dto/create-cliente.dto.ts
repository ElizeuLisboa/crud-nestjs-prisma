import {
  IsEmail,
  IsOptional,
  ValidateIf,
  IsString,
  Length,
  MaxLength,
  MinLength,
  IsEnum,
} from "class-validator";
import { Role } from "src/common/enums/role";
import { IsCPF } from "src/validators/is-cpf.validator";

export class CreateClienteDto {
  @IsString()
  @Length(2, 100)
  nome!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsOptional()
  @ValidateIf(() => process.env.VALIDAR_CPF === "true")
  @IsCPF({ message: "CPF inválido" })
  cpf?: string;

  @IsString()
  @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres" })
  @MaxLength(100, { message: "A senha deve ter no máximo 100 caracteres" })
  senha!: string;

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

  @IsOptional()
  @IsString()
  cep?: string;
}
