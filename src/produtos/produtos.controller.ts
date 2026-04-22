import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Req,
  Param,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  BadRequestException,
  NotFoundException,
  Request,
  ParseIntPipe,
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
import { Public } from "../common/decorators/public.decorator";

@Controller("produtos")
export class ProdutosController {
  private readonly prisma: PrismaService = new PrismaService();
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles("ADMIN", "SUPERUSER")
  @UseInterceptors(FileInterceptor("imagem"))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: any,
    @Req() req: any,
  ) {
    if (dto.unidades && typeof dto.unidades === "string") {
      dto.unidades = JSON.parse(dto.unidades);
    }

    let fotoUrl = dto.imagemUrl || null;
    let cloudinaryId = null;

    if (file) {
      const result = await this.produtosService.uploadImagem(file);
      fotoUrl = result.fotoUrl;
      cloudinaryId = result.cloudinaryId;
    }

    return this.produtosService.create(
      {
        ...dto,
        fotoUrl,
        cloudinaryId,
        price: Number(dto.price),
        estoque: Number(dto.estoque),
      },
      req.user,
    );
  }

  @Get("barcode/:codigo")
  findByBarcode(@Param("codigo") codigo: string) {
    return this.produtosService.findByBarcode(codigo);
  }

  @Get("buscar")
  buscarProdutos(@Query("q") termo: string, @Req() req: any) {
    if (!termo?.trim()) {
      throw new BadRequestException("Nenhum termo informado");
    }
    return this.produtosService.buscarProdutos(termo, req.user);
  }

  @Get("familias")
  async listarFamilias() {
    return this.produtosService.listarFamilias();
  }

  @Get("grupos/:familiaId")
  async listarGrupos(@Param("familiaId", ParseIntPipe) familiaId: number) {
    return this.produtosService.listarGrupos(familiaId);
  }

  @Get("categorias/:grupoId")
  async listarCategorias(@Param("grupoId", ParseIntPipe) grupoId: number) {
    return this.produtosService.listarCategorias(grupoId);
  }

  // @Get("categorias/:grupoId")
  // async listarCategorias() {
  //   return this.produtosService.listarCategorias();
  // }

  // @UseGuards(JwtAuthGuard)
  @Public()
  @Get()
  listar(@Query() filtros: any, @Req() req: any) {
    const empresaHeader = req.headers["x-empresa-id"];

    return this.produtosService.listar(
      filtros,
      req.user,
      empresaHeader ? Number(empresaHeader) : undefined,
    );
  }

  @Public()
  @Get(":id")
  findOne(@Param("id") id: string, @Req() req: any) {
    const empresaHeader = req.headers["x-empresa-id"];

    return this.produtosService.findOne(
      Number(id),
      req.user,
      empresaHeader ? Number(empresaHeader) : undefined,
    );
  }
}
