import { IsEmail, 
  IsOptional, 
  ValidateIf, 
  IsString, 
  Length, 
  MaxLength,
  MinLength, 
  IsEnum, } from "class-validator";
import { Role } from "../../common/enums/role"; 
import {IsCPF } from '../../validators/is-cpf.validator'

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