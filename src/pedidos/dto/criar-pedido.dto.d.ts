export declare class CriarPedidoItemDto {
    produtoId: number;
    quantidade: number;
    preco?: number;
}
export declare class CriarPedidoDto {
    itens: CriarPedidoItemDto[];
}
