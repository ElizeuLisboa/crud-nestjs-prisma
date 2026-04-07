import { DashboardService } from "./dashboard.service";
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    vendasPorProduto(): Promise<{
        produto: string;
        vendas: number;
        qtdPedidos: number;
    }[]>;
    pedidosPorStatus(): Promise<{
        status: string;
        quantidade: number;
    }[]>;
}
