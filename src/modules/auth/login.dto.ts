import { IsString, IsEmail } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email inválido' })
  email!: string;

  @IsString({ message: 'Senha deve ser uma string' })
  password!: string;
}