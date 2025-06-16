import { IsString, IsEmail, Length } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @Length(2, 100)
  nome!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @Length(11, 11, { message: 'CPF deve conter exatamente 11 dígitos' })
  cpf!: string;
}
