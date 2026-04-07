import { PrismaService } from "../prisma/prisma.service";
export declare class FretesService {
    private prisma;
    constructor(prisma: PrismaService);
    calcularFrete(cepDestino: string, peso: number): Promise<{
        transportadora: string | null;
        valor: number;
        prazoEntrega: number;
    }[]>;
}
