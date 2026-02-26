// import { Test, TestingModule } from "@nestjs/testing";
// import { ConfigModule } from "@nestjs/config";
// import { PrismaService } from "../../prisma/prisma.service";
// import { PagamentosService } from "../pagamentos.service";
// import { rm } from "fs/promises";
// import path from "path";
// import { config } from "dotenv";

// // Carrega variáveis do ambiente de teste
// config({ path: ".env.test" });

// describe("PagamentosService Integration", () => {
//   let pagamentosService: PagamentosService;
//   let prismaService: PrismaService;

//   const dbPath = path.resolve(__dirname, "../prisma/dev-test.db");

//   beforeAll(async () => {
//     // Remove o arquivo do banco de teste se existir
//     await rm(dbPath, { force: true });

//     const module: TestingModule = await Test.createTestingModule({
//       imports: [ConfigModule.forRoot({ envFilePath: ".env.test" })],
//       providers: [PagamentosService, PrismaService],
//     }).compile();

//     pagamentosService = module.get<PagamentosService>(PagamentosService);
//     prismaService = module.get<PrismaService>(PrismaService);
//   });

//   beforeEach(async () => {
//     // Limpa todas as tabelas antes de cada teste
//     await prismaService.itemPedido.deleteMany();
//     await prismaService.pedido.deleteMany();
//     await prismaService.produto.deleteMany();
//     await prismaService.cliente.deleteMany();

//     // Opcional: popula dados de teste mínimos
//     await prismaService.cliente.createMany({
//       data: [
//         {
//           nome: "Super Teste",
//           email: "super@test.com",
//           password: "123",
//           role: "SUPERUSER",
//           cpf: "00000000001",
//           cidade: "SP",
//           estado: "SP",
//         },
//         {
//           nome: "Admin Teste",
//           email: "admin@test.com",
//           password: "123",
//           role: "ADMIN",
//           cpf: "00000000002",
//           cidade: "RJ",
//           estado: "RJ",
//         },
//       ],
//     });

//   //   await prismaService.produto.createMany({
//   //     data: [
//   //       { title: "Produto 1", price: 10.0, description: "desc", image: "", estoque: 100, categoriaId:"Roupas" },
//   //       { title: "Produto 2", price: 20.0, description: "desc", image: "", estoque: 50, categoria:"Roupas" },
//   //       { title: "Produto 3", price: 30.0, description: "desc", image: "", estoque: 25, categoria:"Roupas" },
//   //       { title: "Produto 4", price: 40.0, description: "desc", image: "", estoque: 10, categoria:"Roupas" },
//   //       { title: "Produto 5", price: 50.0, description: "desc", image: "", estoque: 5, categoria:"Roupas" },
//   //     ],
//   //   });
//   // });

//   afterAll(async () => {
//     await prismaService.$disconnect();
//   });

//   it("deve salvar pedido e itens no banco de teste", async () => {
//     const cliente = await prismaService.cliente.findFirst({ where: { email: "super@test.com" } });
//     const produto = await prismaService.produto.findFirst({ where: { title: "Produto 1" } });

//     if (!cliente || !produto) throw new Error("Cliente ou produto de teste não encontrados");

//     const sessionMock = {
//       id: "sessao_teste_123",
//       customer_email: cliente.email,
//       amount_total: 1000, // centavos
//       metadata: {
//         items: JSON.stringify([{ id: produto.id, quantity: 1 }]),
//       },
//     } as any;

//     await pagamentosService.salvarPedido(sessionMock);

//     const pedidoSalvo = await prismaService.pedido.findFirst({
//       where: { stripeSessionId: sessionMock.id },
//       include: { itens: true },
//     });

//     expect(pedidoSalvo).toBeDefined();
//     expect(pedidoSalvo?.valorTotal).toBe(produto.price);
//     expect(pedidoSalvo?.itens.length).toBe(1);
//     expect(pedidoSalvo?.itens[0].quantidade).toBe(1);
//   });
// });
