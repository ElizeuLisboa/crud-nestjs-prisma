import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedProdutos() {
  await prisma.produto.deleteMany(); // opcional: limpa tudo antes

  await prisma.produto.createMany({
    data: [
      {
        title: "Notebook Lenovo",
        description: "Notebook com 8GB RAM e SSD 256GB.",
        categoria: "informática",
        price: 3599.99,
        image: "/uploads/produtos/notebook-lenovo.jpg",
      },
      {
        title: "Smartphone Xiaomi",
        description: "Smartphone com câmera tripla e bateria de longa duração.",
        categoria: "celulares",
        price: 2299.0,
        image: "/uploads/produtos/smartphone-xiaomi.jpg",
      },
      {
        title: "Fone JBL",
        description: "Fone Bluetooth JBL com graves potentes.",
        categoria: "acessórios",
        price: 399.9,
        image: "/uploads/produtos/fone-jbl.jpg",
      },
      {
        title: 'Monitor LG 24"',
        description: "Monitor Full HD com 75Hz e HDMI.",
        categoria: "informática",
        price: 899.0,
        image: "/uploads/produtos/monitor-lg.jpg",
      },
      {
        title: "Carregador Turbo",
        description: "Carregador rápido USB-C 33W.",
        categoria: "acessórios",
        price: 149.5,
        image: "/uploads/produtos/carregador-turbo.jpg",
      },
    ],
  });
  console.log("✅ Produtos cadastrados com sucesso!");
}

seedProdutos()
  .catch((e) => {
    console.error("❌ Erro ao rodar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
