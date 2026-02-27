import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  BadRequestException,
  NotFoundException,
  Request,
} from "@nestjs/common";
import { Express } from 'express';
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";

import { CreateProdutoDTO, ProdutosService } from "./produtos.service";
import { JwtAuthGuard } from "../modules/auth/jwt-auth.guard";
import { Roles } from "../modules/auth/roles.decorator";
import { PrismaService } from "../prisma/prisma.service";

@Controller("produtos")
export class ProdutosController {
  private readonly prisma: PrismaService = new PrismaService();
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles("ADMIN", "SUPERUSER")
  @UseInterceptors(
    FileInterceptor("imagem", {
      storage: diskStorage({
        destination: "./uploads/produtos",
        filename: (_, file, callback) => {
          const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
          callback(
            null,
            `${file.fieldname}-${unique}${extname(file.originalname)}`,
          );
        },
      }),
      fileFilter: (_, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(
            new BadRequestException("Tipo de arquivo não suportado"),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  @Post()
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateProdutoDTO,
  ) {
    if (!dto.categoriaNome || dto.categoriaNome.trim() === "") {
      throw new BadRequestException("categoriaNome é obrigatório");
    }

    const imagePath = file ? `/uploads/produtos/${file.filename}` : dto.image;

    return this.produtosService.create({
      ...dto,
      image: imagePath,
      price: Number(dto.price),
      estoque: Number(dto.estoque),
    });
  }

  @Get("barcode/:codigo")
  findByBarcode(@Param("codigo") codigo: string) {
    return this.produtosService.findByBarcode(codigo);
  }

  @Get("buscar")
  buscar(@Query("termo") termo: string) {
    if (!termo?.trim()) {
      throw new BadRequestException("Nenhum termo informado");
    }
    return this.produtosService.buscarProdutos(termo);
  }

  @Get("familias")
  async listarFamilias() {
    return this.produtosService.listarFamilias();
  }

  @Get("categorias")
  async listarCategorias() {
    return this.produtosService.listarCategorias();
  }

  @Get()
  async listar(
    @Query("familia") familia?: string,
    @Query("nome") nome?: string,
  ) {
    return this.produtosService.listar({
      familia,
      nome,
    });
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      throw new BadRequestException("ID inválido");
    }
    return this.produtosService.findOne(parsedId);
  }
}
