-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN', 'SUPERUSER', 'CAIXA', 'CLIENTE');

-- CreateTable
CREATE TABLE "public"."Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'CLIENTE',
    "cpf" TEXT,
    "cep" TEXT,
    "logradouro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "telefone" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CategoriaProduto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "familiaId" INTEGER,

    CONSTRAINT "CategoriaProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Produto" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoriaId" INTEGER,
    "codigoBarras" TEXT,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BadgePromocional" (
    "id" SERIAL NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "texto" TEXT NOT NULL,
    "icone" TEXT,
    "valorMinimo" DOUBLE PRECISION,
    "categoriaId" INTEGER,
    "produtoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BadgePromocional_pkey" PRIMARY KEY ("id")
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
    "clienteId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "stripeSessionId" TEXT,
    "entregue" BOOLEAN NOT NULL DEFAULT false,
    "caixaId" INTEGER,
    "metodoPagamento" TEXT NOT NULL DEFAULT 'DESCONHECIDO',

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
    "cloudinaryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entregadorNome" TEXT NOT NULL DEFAULT 'Não informado',
    "numeroPedido" TEXT,

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
CREATE TABLE "public"."GrupoProduto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "GrupoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FamiliaProduto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "grupoId" INTEGER NOT NULL,

    CONSTRAINT "FamiliaProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Promocao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Promocao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sequencia" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "proximoNumero" INTEGER NOT NULL DEFAULT 1,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sequencia_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "public"."Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriaProduto_nome_key" ON "public"."CategoriaProduto"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_codigoBarras_key" ON "public"."Produto"("codigoBarras");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_numeroPedido_key" ON "public"."Pedido"("numeroPedido");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_stripeSessionId_key" ON "public"."Pedido"("stripeSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Transportadora_numero_key" ON "public"."Transportadora"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "ComprovanteEntrega_pedidoId_key" ON "public"."ComprovanteEntrega"("pedidoId");

-- CreateIndex
CREATE UNIQUE INDEX "FamiliaProduto_nome_key" ON "public"."FamiliaProduto"("nome");

-- CreateIndex
CREATE INDEX "_ProdutosPromocao_B_index" ON "public"."_ProdutosPromocao"("B");

-- AddForeignKey
ALTER TABLE "public"."CategoriaProduto" ADD CONSTRAINT "CategoriaProduto_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "public"."FamiliaProduto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Produto" ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."CategoriaProduto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BadgePromocional" ADD CONSTRAINT "BadgePromocional_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."CategoriaProduto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BadgePromocional" ADD CONSTRAINT "BadgePromocional_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "public"."Produto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemPedido" ADD CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemPedido" ADD CONSTRAINT "ItemPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "public"."Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pedido" ADD CONSTRAINT "Pedido_caixaId_fkey" FOREIGN KEY ("caixaId") REFERENCES "public"."Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Frete" ADD CONSTRAINT "Frete_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Frete" ADD CONSTRAINT "Frete_transportadoraId_fkey" FOREIGN KEY ("transportadoraId") REFERENCES "public"."Transportadora"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PedidoStatus" ADD CONSTRAINT "PedidoStatus_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ComprovanteEntrega" ADD CONSTRAINT "ComprovanteEntrega_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "public"."Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FamiliaProduto" ADD CONSTRAINT "FamiliaProduto_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "public"."GrupoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProdutosPromocao" ADD CONSTRAINT "_ProdutosPromocao_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProdutosPromocao" ADD CONSTRAINT "_ProdutosPromocao_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Promocao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
