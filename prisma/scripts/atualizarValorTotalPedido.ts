import { PrismaClient } from '@prisma/client'
import "./src/lib/prisma" // Importa a instância do Prisma configurada
// const prisma = new PrismaClient()

async function atualizarPedidos() {
  const pedidos = await prisma.pedido.findMany({
    include: { itens: true },
  })

  for (const pedido of pedidos) {
    const valorTotal = pedido.itens.reduce((total, item) => {
      return total + item.quantidade * (item.valor ?? 0)
    }, 0)

    await prisma.pedido.update({
      where: { id: pedido.id },
      data: { valorTotal },
    })
  }

  console.log('Pedidos atualizados com valorTotal!')
  await prisma.$disconnect()
}

atualizarPedidos().catch((e) => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})