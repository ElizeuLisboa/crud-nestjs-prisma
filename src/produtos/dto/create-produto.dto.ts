import { IsString, IsNotEmpty, IsNumber, IsUrl, Min } from "class-validator";

export class CreateProdutoDto {
  
  @IsString()
  @IsNotEmpty({ message: "O título é obrigatório" })
  title!: string;

  @IsString()
  @IsNotEmpty({ message: "A descrição é obrigatória" })
  description!: string;

  @IsNumber({}, { message: "O preço deve ser um número" })
  @Min(0)
  price!: number;

  @IsString()
  @IsNotEmpty({ message: "A imagem é obrigatória" })
  image!: string;
}
