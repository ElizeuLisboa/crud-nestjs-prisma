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
import { Express } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
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
  @UseInterceptors(FileInterceptor("imagem"))
  async create(@UploadedFile() file: Express.Multer.File, @Body() dto: any) {
    let fotoUrl = dto.image;
    let cloudinaryId = null;

    if (file) {
      // const result = await this.produtosService.uploadImagem(file);
      const result = await this.produtosService.uploadImagem(file);

      fotoUrl = result.fotoUrl;
      cloudinaryId = result.cloudinaryId;
    }

    return this.produtosService.create({
      ...dto,
      fotoUrl,
      cloudinaryId,
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


