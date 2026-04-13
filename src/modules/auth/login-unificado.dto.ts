import { IsString } from "class-validator";

export class LoginUnificadoDto {
  @IsString()
  login?: string;

  @IsString()
  password!: string;
}