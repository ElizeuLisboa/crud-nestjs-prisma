// prisma/scripts/atualizarItemPedido.ts
import { PrismaClient } from '@prisma/client'
import "./src/lib/prisma" // Importa a instância do Prisma configurada
// const prisma = new PrismaClient()

async function atualizarValores() {
  const itens = await prisma.itemPedido.findMany({
    include: { produto: true },
  })

  for (const item of itens) {
    await prisma.itemPedido.update({
      where: { id: item.id },
      data: {
        valor: item.produto.price,
      },
    })
  }

  console.log('Itens atualizados com sucesso!')
  await prisma.$disconnect()
}

atualizarValores().catch((e) => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})
