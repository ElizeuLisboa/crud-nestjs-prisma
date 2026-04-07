export declare class ItemPedidoDto {
    produtoId: number;
    quantidade: number;
    preco?: number;
}
export declare class CreatePedidoDto {
    itens: ItemPedidoDto[];
}
