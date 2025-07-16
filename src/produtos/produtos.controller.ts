import {
  Get,
  Controller,
  Post,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Request,
  BadRequestException,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname, join } from "path";
import { ProdutosService } from "./produtos.service";

@Controller("produtos")
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor("imagem", {
      storage: diskStorage({
        destination: join(process.cwd(), "uploads", "produtos"), // ✅ caminho absoluto
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
          console.log("🖼️ Nome do arquivo salvo:", filename);
          callback(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(
            new BadRequestException("Tipo de arquivo não suportado"),
            false
          );
        }
        cb(null, true);
      },
    })
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
    @Request() req: any
  ) {
    console.log("📦 body:", body);
    console.log("👤 req.user:", req.user);
    console.log("🗂️ file:", file?.originalname, file?.path);

    if (req.user?.role !== "ADMIN" && req.user?.role !== "SUPERUSER") {
      throw new BadRequestException(
        "Apenas administradores podem cadastrar produtos."
      );
    }

    const { title, description, price, imagemUrl } = body;

    if (!file && !imagemUrl) {
      throw new BadRequestException(
        "Imagem (upload) ou imagemUrl é obrigatória."
      );
    }

    const imagePath = file ? `/uploads/produtos/${file.filename}` : imagemUrl;

    return this.produtosService.create({
      title,
      description,
      price: parseFloat(price),
      image: imagePath,
    });
  }

  @Get()
  async findAll() {
    return this.produtosService.findAll();
  }
}
