import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getVendasPorProduto(): Promise<{
        produto: string;
        vendas: number;
        qtdPedidos: number;
    }[]>;
    getPedidosPorStatus(): Promise<{
        status: string;
        quantidade: number;
    }[]>;
}
