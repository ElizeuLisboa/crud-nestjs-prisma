import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Iniciando seed-test...");

  // Limpa tudo (banco isolado)
  await prisma.itemPedido.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.produto.deleteMany();
  await prisma.cliente.deleteMany();

  // Cria apenas dados de teste
  await prisma.cliente.create({
    data: {
      nome: "Cliente Teste",
      email: "teste@teste.com",
      password: "123",
      role: "USER",
    },
  });

  const produtosTeste = [...Array(5)].map((_, i) => ({
    title: `Produto Teste ${i + 1}`,
    price: 50 + i * 5,
    description: "Produto de teste",
    estoque: 100,
    image: "https://picsum.photos/200/200?random=" + i,
  }));

  await prisma.produto.createMany({ data: produtosTeste });

  console.log("✅ Seed dev-test.db concluído!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
