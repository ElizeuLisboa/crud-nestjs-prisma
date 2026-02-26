import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  // Vendas por produto
  async getVendasPorProduto() {
    const itens = await this.prisma.itemPedido.groupBy({
      by: ['produtoId'],
      _sum: { valor: true },
      _count: { id: true },
    });

    // Puxar nome do produto
    const resultados = await Promise.all(
      itens.map(async (item) => {
        const produto = await this.prisma.produto.findUnique({
          where: { id: item.produtoId },
        });
        return {
          produto: produto?.title || 'Produto Desconhecido',
          vendas: Number(item._sum.valor) || 0,
          qtdPedidos: item._count.id,
        };
      }),
    );

    return resultados;
  }

  // Pedidos por status
  async getPedidosPorStatus() {
    const pedidos = await this.prisma.pedido.groupBy({
      by: ['status'],
      _count: { id: true },
    });

    return pedidos.map((p) => ({
      status: p.status,
      quantidade: p._count.id,
    }));
  }
}
