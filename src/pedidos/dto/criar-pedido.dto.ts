export class CriarPedidoItemDto {
  produtoId: number;
  quantidade: number;
  preco?: number;
}

export class CriarPedidoDto {
  itens: CriarPedidoItemDto[];
}
