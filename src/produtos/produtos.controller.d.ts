import { ProdutosService } from "./produtos.service";
export declare class ProdutosController {
    private readonly produtosService;
    private readonly prisma;
    constructor(produtosService: ProdutosService);
    create(file: Express.Multer.File, dto: any): Promise<{
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
    buscar(termo: string): Promise<{
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
    listarCategorias(): Promise<{
        id: number;
        nome: string;
        familia: {
            id: number;
            nome: string;
        };
    }[]>;
    listar(familia?: string, nome?: string): Promise<({
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
    findOne(id: string): Promise<{
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
}
