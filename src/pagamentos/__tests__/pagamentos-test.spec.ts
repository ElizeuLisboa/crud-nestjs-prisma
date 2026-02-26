// import { Test, TestingModule } from "@nestjs/testing";
// import { PagamentosService } from "../pagamentos.service";
// import { PrismaService } from "src/prisma/prisma.service";
// import { ConfigService } from "@nestjs/config";
// import Stripe from "stripe";

// describe("PagamentosService", () => {
//   let service: PagamentosService;

//   // Aqui o mock do prisma, com todos os métodos que você usa
//   const prismaMock = {
//     cliente: {
//       findUnique: jest.fn(),
//     },
//     produto: {
//       findUnique: jest.fn(),
//       update: jest.fn(),
//     },
//     pedido: {
//       create: jest.fn(),
//     },
//     itemPedido: {
//       create: jest.fn(),
//     },
//     $transaction: jest.fn(),
//   } as unknown as PrismaService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         PagamentosService,
//         {
//           provide: PrismaService,
//           useValue: prismaMock,
//         },
//         {
//           provide: ConfigService,
//           useValue: {
//             get: jest.fn().mockReturnValue("fake_key"),
//           },
//         },
//       ],
//     }).compile();

//     service = module.get<PagamentosService>(PagamentosService);
//   });

//   it("should be defined", () => {
//     expect(service).toBeDefined();
//   });

//   // Aqui seus testes usando prismaMock.cliente.findUnique, etc...
//   describe("salvarPedido", () => {
//     it("deve salvar pedido e itens com estoque atualizado", async () => {
//       // Dados mockados
//       const sessionMock = {
//         id: "sess_123",
//         customer_email: "cliente@teste.com",
//         amount_total: 10000,
//         metadata: {
//           items: JSON.stringify([{ id: 1, quantidade: 2 }]),
//         },
//       } as unknown as Stripe.Checkout.Session;

//       // Mock cliente encontrado
//       (prismaMock.cliente.findUnique as jest.Mock).mockResolvedValue({
//         id: 42,
//       });

//       // Mock produto com estoque suficiente
//       (prismaMock.produto.findUnique as jest.Mock).mockResolvedValue({
//         id: 1,
//         title: "Produto Teste",
//         price: 50,
//         estoque: 10,
//       });

//       // Mock transação executando callback
//       (prismaMock.$transaction as jest.Mock).mockImplementation(async (cb) => {
//         await cb({
//           pedido: {
//             create: jest.fn().mockResolvedValue({ id: 100 }),
//           },
//           produto: {
//             findUnique: prismaMock.produto.findUnique,
//             update: jest.fn().mockResolvedValue(true),
//           },
//           itemPedido: {
//             create: jest.fn().mockResolvedValue(true),
//           },
//         });
//       });

//       await service.salvarPedido(sessionMock);

//       expect(prismaMock.cliente.findUnique).toHaveBeenCalledWith({
//         where: { email: "cliente@teste.com" },
//       });
//       expect(prismaMock.$transaction).toHaveBeenCalled();
//     });

//     it("deve lançar erro quando estoque insuficiente", async () => {
//       const sessionMock = {
//         id: "sess_123",
//         customer_email: "cliente@teste.com",
//         amount_total: 10000,
//         metadata: {
//           items: JSON.stringify([{ id: 1, quantidade: 20 }]),
//         },
//       } as unknown as Stripe.Checkout.Session;

//       (prismaMock.cliente.findUnique as jest.Mock).mockResolvedValue({
//         id: 42,
//       });
//       (prismaMock.produto.findUnique as jest.Mock).mockResolvedValue({
//         id: 1,
//         title: "Produto Teste",
//         price: 50,
//         estoque: 10, // menos que quantidade do pedido
//       });

//       (prismaMock.$transaction as jest.Mock).mockImplementation(async (cb) => {
//         await cb({
//           pedido: {
//             create: jest.fn(),
//           },
//           produto: {
//             findUnique: prismaMock.produto.findUnique,
//             update: jest.fn(),
//           },
//           itemPedido: {
//             create: jest.fn(),
//           },
//         });
//       });

//       await expect(service.salvarPedido(sessionMock)).rejects.toThrow(
//         /Estoque insuficiente/
//       );
//     });
//   });
// });
