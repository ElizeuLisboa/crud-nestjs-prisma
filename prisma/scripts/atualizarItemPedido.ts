import { PrismaClient } from '@prisma/client'
import "./src/lib/prisma" 
import "./atualizarValorTotalPedido"  // mexi para ficar assim
// const prisma = new PrismaClient() // estava assim antes

async function atualizarValores() {
  const itens = await prisma.itemPedido.findMany({ // onde tem prisma esta assim
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
