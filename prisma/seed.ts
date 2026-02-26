import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  console.log("🧹 Limpando base de TESTE...");

  // ❌ NÃO APAGAR CLIENTES
  // ❌ NÃO APAGAR USUÁRIOS

  await prisma.parcelaPagamento.deleteMany();
  await prisma.pagamento.deleteMany();
  await prisma.itemPedido.deleteMany();
  await prisma.pedido.deleteMany();

  await prisma.produto.deleteMany();
  await prisma.caixa.deleteMany();

  console.log("✅ Base limpa, clientes preservados!");
}

main().finally(() => prisma.$disconnect());
