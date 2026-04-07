import { CaixaService } from "./caixa.service";
export declare class CaixaController {
    private readonly caixaService;
    constructor(caixaService: CaixaService);
    finalizar(body: any, req: any): Promise<{
        empresa: {
            id: number;
            nome: string;
            telefone: string;
            cnpj: string;
            endereco: string;
            ativa: boolean;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        dadosPix: any;
        itens?: ({
            produto: {
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
            };
        } & {
            id: number;
            empresaId: number;
            produtoId: number;
            quantidade: number;
            valor: number | null;
            descricao: string | null;
            valorUnitario: number | null;
            pedidoId: number;
        })[] | undefined;
        id?: number | undefined;
        empresaId?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        numeroPedido?: string | undefined;
        valorTotal?: number | undefined;
        status?: string | undefined;
        origem?: string | undefined;
        entregue?: boolean | undefined;
        metodoPagamento?: string | undefined;
        clienteId?: number | null | undefined;
        caixaId?: number | null | undefined;
    }>;
}
