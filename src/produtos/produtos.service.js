"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const cloudinary_config_1 = __importDefault(require("../cloudinary/cloudinary.config"));
const stream_1 = require("stream");
let ProdutosService = class ProdutosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.produto.create({
            data: {
                title: data.title,
                description: data.description,
                price: data.price,
                estoque: data.estoque,
                image: data.image,
                fotoUrl: data.image,
                cloudinaryId: null,
                codigoBarras: data.codigoBarras,
                categoria: {
                    connect: {
                        id: data.categoriaId,
                    },
                },
                empresa: {
                    connect: { id: 1 },
                },
            },
        });
    }
    async uploadImagem(file) {
        return new Promise((resolve, reject) => {
            const stream = cloudinary_config_1.default.uploader.upload_stream({ folder: "produtos" }, (error, result) => {
                if (error || !result) {
                    return reject(new Error("Erro ao enviar imagem"));
                }
                resolve({
                    fotoUrl: result.secure_url,
                    cloudinaryId: result.public_id,
                });
            });
            stream_1.Readable.from(file.buffer).pipe(stream);
        });
    }
    async findByBarcode(codigo) {
        if (!codigo || codigo.trim() === "")
            return null;
        return this.prisma.produto.findUnique({
            where: { codigoBarras: codigo },
        });
    }
    async listar(params) {
        const { familia, nome } = params;
        return this.prisma.produto.findMany({
            where: {
                ...(nome && {
                    title: {
                        contains: nome,
                        mode: "insensitive",
                    },
                }),
                ...(familia && {
                    categoria: {
                        familia: {
                            id: Number(familia),
                        },
                    },
                }),
            },
            include: {
                categoria: {
                    include: {
                        familia: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    async listarCategorias() {
        return this.prisma.categoriaProduto.findMany({
            select: {
                id: true,
                nome: true,
                familia: {
                    select: {
                        id: true,
                        nome: true,
                    },
                },
            },
            orderBy: { nome: "asc" },
        });
    }
    async listarFamilias() {
        return this.prisma.familiaProduto.findMany({
            orderBy: { nome: "asc" },
            include: {
                categorias: {
                    orderBy: { nome: "asc" },
                },
            },
        });
    }
    async findAll(filtros) {
        const where = {};
        if (filtros.familiaId) {
            where.categoria = {
                familiaId: filtros.familiaId,
            };
        }
        if (filtros.categoriaId) {
            where.categoriaId = filtros.categoriaId;
        }
        if (filtros.nome && filtros.nome.trim() !== "") {
            where.title = {
                contains: filtros.nome,
                mode: "insensitive",
            };
        }
        return this.prisma.produto.findMany({
            where,
            include: {
                categoria: {
                    include: {
                        familia: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException("ID inválido");
        }
        const produto = await this.prisma.produto.findUnique({
            where: { id },
            include: {
                categoria: {
                    select: {
                        id: true,
                        nome: true,
                        familia: {
                            select: {
                                id: true,
                                nome: true,
                            },
                        },
                    },
                },
            },
        });
        if (!produto) {
            throw new common_1.NotFoundException("Produto não encontrado");
        }
        return produto;
    }
    async buscarProdutos(query) {
        const termo = query?.trim();
        if (!termo)
            return [];
        const ehNumero = /^\d+$/.test(termo);
        if (ehNumero) {
            const id = Number(termo);
            const produto = await this.prisma.produto.findFirst({
                where: {
                    OR: [{ id }, { codigoBarras: termo }],
                },
            });
            return produto ? [produto] : [];
        }
        return this.prisma.produto.findMany({
            where: {
                title: {
                    contains: termo,
                    mode: "insensitive",
                },
            },
            orderBy: { createdAt: "desc" },
        });
    }
};
exports.ProdutosService = ProdutosService;
exports.ProdutosService = ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProdutosService);
//# sourceMappingURL=produtos.service.js.map