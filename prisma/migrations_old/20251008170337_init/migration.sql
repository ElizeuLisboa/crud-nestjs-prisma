-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN', 'SUPERUSER');

-- CreateTable
CREATE TABLE "public"."Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'USER',
    "cpf" TEXT,
    "cep" TEXT,
    "logradouro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Promocao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "desconto" INTEGER NOT NULL,
    "freteGratis" BOOLEAN NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promocao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Produto" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemPedido" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION,
    "promocaoId" INTEGER,

    CONSTRAINT "ItemPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pedido" (
    "id" SERIAL NOT NULL,
    "numeroPedido" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "stripeSessionId" TEXT,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Frete" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "transportadoraId" INTEGER,
    "pesoMin" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "pesoMax" DOUBLE PRECISION NOT NULL DEFAULT 999999,
    "valor" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "prazoEntrega" INTEGER NOT NULL DEFAULT 3,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Frete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Transportadora" (
    "id" SERIAL NOT NULL,
    "numero" TEXT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "fretePadrao" DOUBLE PRECISION,
    "cep" TEXT,
    "logradouro" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "tipoVeiculo" TEXT,

    CONSTRAINT "Transportadora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PedidoStatus" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "dataStatus" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PedidoStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ComprovanteEntrega" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "nomeRecebedor" TEXT NOT NULL,
    "fotoUrl" TEXT NOT NULL,
    "cloudinaryId" TEXT NOT NULL,
    "dataEntrega" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComprovanteEntrega_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VendaResumo" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "totalVendas" DOUBLE PRECISION NOT NULL,
    "qtdPedidos" INTEGER NOT NULL,
    "qtdProdutos" INTEGER NOT NULL,

    CONSTRAINT "VendaResumo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ProdutosPromocao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProdutosPromocao_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "public"."Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_stripeSessionId_key" ON "public"."Pedido"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Transportadora_numero_key" ON "public"."Transportadora"("numero");

-- CreateIndex
CREATE INDEX "_ProdutosPromocao_B_index" ON "public"."_ProdutosPromocao"("B");

-- AddForeignKey
ALTER TABLE "public"."ItemPedido" ADD CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemPedido" ADD CONSTRAINT "ItemPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "public"."Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemPedido" ADD CONSTRAINT "ItemPedido_promocaoId_fkey" FOREIGN KEY ("promocaoId") REFERENCES "public"."Promocao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Frete" ADD CONSTRAINT "Frete_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Frete" ADD CONSTRAINT "Frete_transportadoraId_fkey" FOREIGN KEY ("transportadoraId") REFERENCES "public"."Transportadora"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PedidoStatus" ADD CONSTRAINT "PedidoStatus_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ComprovanteEntrega" ADD CONSTRAINT "ComprovanteEntrega_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProdutosPromocao" ADD CONSTRAINT "_ProdutosPromocao_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProdutosPromocao" ADD CONSTRAINT "_ProdutosPromocao_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Promocao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
