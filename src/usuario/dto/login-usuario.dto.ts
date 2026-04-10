// // src/usuario/dto/login-usuario.dto.ts
// export class LoginUsuarioDto {
//   email?: string;
//   password!: string;
// }

import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginUsuarioDto {
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6)
  password!: string;
}