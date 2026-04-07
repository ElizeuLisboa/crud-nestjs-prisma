import { PrismaService } from "../prisma/prisma.service";
export type CreateProdutoDTO = {
    title: string;
    description: string;
    price: number;
    categoriaNome: string;
    image: string;
    estoque: number;
    codigoBarras?: string;
    categoriaId: number;
};
export declare class ProdutosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProdutoDTO): Promise<{
        id: number;
        empresaId: number;
        createdAt: Date;
        title: string;
        description: string;
        price: number;
        image: string;
        estoque: number;
        codigoBarras: string | null;
        cloudinaryId: string | null;
        fotoUrl: string | null;
        categoriaId: number | null;
    }>;
    uploadImagem(file: Express.Multer.File): Promise<{
        fotoUrl: string;
        cloudinaryId: string;
    }>;
    findByBarcode(codigo: string): Promise<{
        id: number;
        empresaId: number;
        createdAt: Date;
        title: string;
        description: string;
        price: number;
        image: string;
        estoque: number;
        codigoBarras: string | null;
        cloudinaryId: string | null;
        fotoUrl: string | null;
        categoriaId: number | null;
    } | null>;
    listar(params: {
        familia?: string;
        nome?: string;
    }): Promise<({
        categoria: ({
            familia: {
                id: number;
                nome: string;
            };
        } & {
            id: number;
            nome: string;
            empresaId: number;
            familiaId: number;
        }) | null;
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        title: string;
        description: string;
        price: number;
        image: string;
        estoque: number;
        codigoBarras: string | null;
        cloudinaryId: string | null;
        fotoUrl: string | null;
        categoriaId: number | null;
    })[]>;
    listarCategorias(): Promise<{
        id: number;
        nome: string;
        familia: {
            id: number;
            nome: string;
        };
    }[]>;
    listarFamilias(): Promise<({
        categorias: {
            id: number;
            nome: string;
            empresaId: number;
            familiaId: number;
        }[];
    } & {
        id: number;
        nome: string;
    })[]>;
    findAll(filtros: {
        familiaId?: number;
        categoriaId?: number;
        nome?: string;
    }): Promise<({
        categoria: ({
            familia: {
                id: number;
                nome: string;
            };
        } & {
            id: number;
            nome: string;
            empresaId: number;
            familiaId: number;
        }) | null;
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        title: string;
        description: string;
        price: number;
        image: string;
        estoque: number;
        codigoBarras: string | null;
        cloudinaryId: string | null;
        fotoUrl: string | null;
        categoriaId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        categoria: {
            id: number;
            nome: string;
            familia: {
                id: number;
                nome: string;
            };
        } | null;
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        title: string;
        description: string;
        price: number;
        image: string;
        estoque: number;
        codigoBarras: string | null;
        cloudinaryId: string | null;
        fotoUrl: string | null;
        categoriaId: number | null;
    }>;
    buscarProdutos(query: string): Promise<{
        id: number;
        empresaId: number;
        createdAt: Date;
        title: string;
        description: string;
        price: number;
        image: string;
        estoque: number;
        codigoBarras: string | null;
        cloudinaryId: string | null;
        fotoUrl: string | null;
        categoriaId: number | null;
    }[]>;
}
