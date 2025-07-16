import { IsString, IsNotEmpty, IsNumber, IsUrl } from "class-validator";

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty({ message: "O título é obrigatório" })
  title!: string;

  @IsString()
  @IsNotEmpty({ message: "A descrição é obrigatória" })
  description!: string;

  @IsNumber({}, { message: "O preço deve ser um número" })
  price!: number;

  @IsString()
  @IsNotEmpty({ message: "A imagem é obrigatória" })
  image!: string;
}
