export declare class PagarMercadoPagoDto {
    pedidoId: number;
    token: string;
    valor: number;
    installments: number;
    paymentMethodId: string;
    payer: {
        identification: {
            type: "CPF";
            number: string;
        };
    };
}
