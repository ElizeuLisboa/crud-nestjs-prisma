import { PrismaClient, Role } from "@prisma/client";
import axios from "axios";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Limpando dados...");
  await prisma.produtoImagem.deleteMany();

  console.log("🧹 Limpando banco...");
  // ---- tabelas mais dependentes ----
  await prisma.parcelaPagamento.deleteMany();
  await prisma.pagamento.deleteMany();

  await prisma.itemPedido.deleteMany();
  await prisma.pedidoStatus.deleteMany();
  await prisma.comprovanteEntrega.deleteMany();
  await prisma.frete.deleteMany();
  await prisma.pedido.deleteMany();

  // ---- auditoria ----
  await prisma.auditoriaAcao.deleteMany();

  // ---- produtos ----
  await prisma.produtoImagem.deleteMany();
  await prisma.produtoVariacao.deleteMany();
  await prisma.badgePromocional.deleteMany();
  await prisma.produto.deleteMany();
  await prisma.categoriaProduto.deleteMany();
  await prisma.familiaProduto.deleteMany();

  // ---- promocional / logística ----
  await prisma.promocao.deleteMany();
  await prisma.transportadora.deleteMany();

  // ---- clientes (por último!) ----
  await prisma.cliente.deleteMany();
 

  console.log("✅ Banco limpo com sucesso!");

  console.log("👤 Criando clientes...");

  const superUserPass = await bcrypt.hash("Gmdcl@0823", 10);
  const adminPass = await bcrypt.hash("Betinha@0582", 10);
  const caixaPass = await bcrypt.hash("Amemi@1991", 10);
  const clientePass = await bcrypt.hash("rosaMaria@3103", 10);

  await prisma.cliente.createMany({
    data: [
      {
        nome: "Elizeu Lisboa",
        email: "eliseulisboa@teste.com",
        password: superUserPass,
        role: Role.SUPERUSER,
        cpf: "00000000001",
      },
      {
        nome: "Roberta Mattos",
        email: "betinhalisboa@teste.com",
        password: adminPass,
        role: Role.ADMIN,
        cpf: "00000000002",
      },
      {
        nome: "Guilherme Vinicius Lisboa",
        email: "guivinicius@teste.com",
        password: caixaPass,
        role: Role.CAIXA,
        cpf: "00000000003",
      },
            {
        nome: "Rosa Maria de F Lisboa",
        email: "rosamaria@teste.com",
        password: clientePass,
        role: Role.CLIENTE,
        cpf: "00000000004",
      },
    ],
  });

  console.log("📂 Criando famílias...");

  const [vestuario, calcados, acessorios] = await Promise.all([
    prisma.familiaProduto.create({ data: { nome: "Vestuário" } }),
    prisma.familiaProduto.create({ data: { nome: "Calçados" } }),
    prisma.familiaProduto.create({ data: { nome: "Acessórios" } }),
  ]);

  console.log("📁 Criando categorias...");

  const categorias = {
    vestuario: await prisma.categoriaProduto.createMany({
      data: [
        { nome: "Camisetas", familiaId: vestuario.id },
        { nome: "Calças", familiaId: vestuario.id },
        { nome: "Jaquetas", familiaId: vestuario.id },
      ],
    }),
    calcados: await prisma.categoriaProduto.createMany({
      data: [
        { nome: "Tênis", familiaId: calcados.id },
        { nome: "Botas", familiaId: calcados.id },
        { nome: "Sandálias", familiaId: calcados.id },
      ],
    }),
    acessorios: await prisma.categoriaProduto.createMany({
      data: [
        { nome: "Relógios", familiaId: acessorios.id },
        { nome: "Bolsas", familiaId: acessorios.id },
        { nome: "Óculos", familiaId: acessorios.id },
      ],
    }),
  };

  const categoriasDb = await prisma.categoriaProduto.findMany();

  console.log("🛍️ Buscando produtos das APIs...");

  const { data: data1 } = await axios.get(
    "https://dummyjson.com/products?limit=150",
  );
  const { data: data2 } = await axios.get("https://fakestoreapi.com/products");

  const produtosApi = [...data1.products, ...data2];

  console.log(`📦 Total de produtos: ${produtosApi.length}`);

  for (const produto of produtosApi) {
    let categoriaNome = "Relógios";
    let familiaId = acessorios.id;

    const cat = (produto.category || "").toLowerCase();

    if (cat.includes("shirt") || cat.includes("clothing")) {
      categoriaNome = "Camisetas";
      familiaId = vestuario.id;
    } else if (cat.includes("shoe")) {
      categoriaNome = "Tênis";
      familiaId = calcados.id;
    }

    const categoria = categoriasDb.find(
      (c) => c.nome === categoriaNome && c.familiaId === familiaId,
    );

    if (!categoria) continue;

    await prisma.produto.create({
      data: {
        title: produto.title,
        description: produto.description || "",
        price: Number(produto.price),
        image: produto.thumbnail || produto.image || "",
        estoque: Math.floor(Math.random() * 100),
        categoriaId: categoria.id,
      },
    });
  }

  console.log("🚚 Criando transportadoras...");

  await prisma.transportadora.createMany({
    data: [
      {
        nome: "Correios - PAC",
        cnpj: "12.345.678/0001-90",
        telefone: "1111-1111",
      },
      {
        nome: "Correios - Sedex",
        cnpj: "23.456.789/0001-01",
        telefone: "2222-2222",
      },
      {
        nome: "Motoboy Express",
        cnpj: "34.567.890/0001-12",
        telefone: "3333-3333",
      },
      {
        nome: "Entrega Carro",
        cnpj: "45.678.901/0001-23",
        telefone: "4444-4444",
      },
      {
        nome: "Entrega Caminhão",
        cnpj: "56.789.012/0001-34",
        telefone: "5555-5555",
      },
    ],
  });

  console.log("✅ Transportadoras criadas.");

  console.log("🎁 Criando promoções...");
  const promocoes = [
    {
      nome: "Promo 10%",
      desconto: 10,
      freteGratis: false,
      dataInicio: new Date(),
      dataFim: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    },
    {
      nome: "Promo 20%",
      desconto: 20,
      freteGratis: true,
      dataInicio: new Date(),
      dataFim: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    },
  ];
  await prisma.promocao.createMany({ data: promocoes });
  console.log("✅ Promoções criadas.");

  console.log("🧾 Criando pedidos simulados...");
  const clientes = await prisma.cliente.findMany();
  const produtos = await prisma.produto.findMany();
  const transportadora = await prisma.transportadora.findFirst();
  const promoList = await prisma.promocao.findMany();

  if (!transportadora) throw new Error("Nenhuma transportadora encontrada!");
  if (promoList.length === 0) throw new Error("Nenhuma promoção encontrada!");

  for (const cliente of clientes) {
    const qtdPedidos = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < qtdPedidos; i++) {
      const itensPedidoData = [...produtos]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 5) + 1)
        .map((p) => {
          const promo = promoList[Math.floor(Math.random() * promoList.length)];
          return {
            produtoId: p.id,
            quantidade: Math.floor(Math.random() * 3) + 1,
            valor: p.price,
            promocaoId: promo.id,
          };
        });

      const valorTotal = itensPedidoData.reduce(
        (acc, item) => acc + item.valor * item.quantidade,
        0,
      );

      await prisma.pedido.create({
        data: {
          numeroPedido: `PED${Math.floor(Math.random() * 10000)}`,
          clienteId: cliente.id,
          valorTotal,
          status: "PENDENTE",
          stripeSessionId: `sess_${Math.floor(Math.random() * 1000000)}`,
          createdAt: new Date(),

          itens: {
            create: itensPedidoData,
          },

          fretes: {
            create: {
              transportadoraId: transportadora.id,
              prazoEntrega: 5,
            },
          },

          historicoStatus: {
            create: [{ status: "PENDENTE", dataStatus: new Date() }],
          },

          // ✅ RELAÇÃO 1:1 → create deve ser um objeto, não array
          comprovantes: {
            create: {
              nomeRecebedor: cliente.nome ?? "Não informado",
              entregadorNome: "Não informado", // se existir no schema
              fotoUrl: "",
              cloudinaryId: "",
              createdAt: new Date(),
            },
          },
        },
      });
    }
  }

  const pedidos = await prisma.pedido.findMany({ include: { itens: true } });
  const totalVendas = pedidos.reduce((acc, p) => acc + p.valorTotal, 0);
  const qtdPedidos = pedidos.length;
  const qtdProdutos = pedidos.reduce((acc, p) => acc + p.itens.length, 0);

  await prisma.vendaResumo.create({
    data: { data: new Date(), totalVendas, qtdPedidos, qtdProdutos },
  });

  console.log("✅ Seed completo finalizado com sucesso!");

  // ─────────────────────────────────────────────
  // EMPRESA PADRÃO PARA CUPOM E PDV
  // ─────────────────────────────────────────────
  console.log("🏢 Criando empresa padrão para CUPOM E PDV");
  await prisma.empresa.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: "Minha Loja de Teste",
      cnpj: "00.000.000/0001-00",
      endereco: "Rua Exemplo, 123 - Centro",
      telefone: "(00) 0000-0000",
      mensagemCupom: "Obrigado pela preferência!",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
