import { FretesService } from "./fretes.service";
export declare class FretesController {
    private readonly fretesService;
    constructor(fretesService: FretesService);
    calcular(cepDestino: string, peso: number): Promise<{
        transportadora: string | null;
        valor: number;
        prazoEntrega: number;
    }[]>;
}
