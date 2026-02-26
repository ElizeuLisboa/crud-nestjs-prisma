import { PrismaClient as PrismaClientPostgres, Role } from "@prisma/client";
import { PrismaClient as PrismaClientSQLite } from "../node_modules/.prisma/client-sqlite";

const prismaPostgres = new PrismaClientPostgres();
const prismaSQLite = new PrismaClientSQLite();

async function main() {
  console.log("Iniciando seed no PostgreSQL...");

  // === Clientes ===
  const clientes = await prismaSQLite.cliente.findMany();
  for (const c of clientes) {
    const existente = await prismaPostgres.cliente.findUnique({
      where: { email: c.email },
    });

    if (!existente) {
      await prismaPostgres.cliente.create({
        data: {
          nome: c.nome,
          email: c.email,
          password: c.senha,
          role:
            c.role && Object.values(Role).includes(c.role as Role)
              ? (c.role as Role)
              : Role.USER,
        },
      });
    }
  }

  // === Produtos ===
  const produtos = await prismaSQLite.produto.findMany();
  for (const p of produtos) {
    const existente = await prismaPostgres.produto.findUnique({
      where: { title: p.title },
    });

    if (!existente) {
      await prismaPostgres.produto.create ({
        data: {
          title: p.title,
          description: p.description ?? "",
          price: p.price,
          estoque: p.estoque,
          image: p.image ?? "",
        },
      });
    }
  }

  // === Pedidos e Itens ===
  const pedidos = await prismaSQLite.pedido.findMany({
    include: { itens: true },
  });

  for (const ped of pedidos) {
    const pedidoExistente = await prismaPostgres.pedido.findFirst({
      where: { numeroPedido: ped.numeroPedido },
    });

    if (!pedidoExistente) {
      await prismaPostgres.pedido.create({
        data: {
          numeroPedido: ped.numeroPedido,
          clienteId: ped.clienteId,
          createdAt: ped.createdAt,
          valorTotal: ped.itens.reduce((sum, i) => sum + (i.valor * i.quantidade), 0),
          status: (ped as any).status ?? "PENDENTE",
          stripeSessionId: (ped as any).stripeSessionId ?? null,          
          // status: ped.status ?? "PENDENTE",
          // stripeSessionId: ped.stripeSessionId ?? null,
          itens: {
            create: ped.itens.map((i) => ({
              produtoId: i.produtoId,
              quantidade: i.quantidade,
              precoUnitario: i.valor,
            })),
          },
        },
      });
    }
  }

  console.log("Seed finalizado!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaPostgres.$disconnect();
    await prismaSQLite.$disconnect();
  });
