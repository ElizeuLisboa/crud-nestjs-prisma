// import { IsEnum, IsNumber, IsOptional, IsString, IsObject, Min } from "class-validator";
// import { AuditoriaAcaoEnum } from "../acoes.enum";

// export class CreateAuditoriaDto {
//   @IsEnum(AuditoriaAcaoEnum, {
//     message: "Ação inválida. Utilize uma ação permitida."
//   })
//   acao: AuditoriaAcaoEnum;

//   @IsOptional()
//   @IsNumber()
//   @Min(0.01, { message: "Valor deve ser maior que zero" })
//   valor?: number;

//   @IsOptional()
//   @IsString()
//   detalhes?: string;

//   @IsOptional()
//   @IsNumber()
//   referenciaId?: number;

//   @IsOptional()
//   @IsObject()
//   dadosExtras?: any;
// }

import { IsString, IsNumber, IsOptional, IsObject, Min } from "class-validator";

export class CreateAuditoriaDto {
  @IsString()
  acao: string; // "SANGRIA", "SUPRIMENTO", etc

  @IsOptional()
  @IsNumber()
  @Min(0.01)
  valor?: number;

  @IsOptional()
  @IsString()
  detalhes?: string;

  @IsOptional()
  @IsNumber()
  referenciaId?: number;

  @IsOptional()
  @IsObject()
  dadosExtras?: any;
}
