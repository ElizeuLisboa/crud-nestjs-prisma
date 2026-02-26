-- CreateTable
CREATE TABLE "ProdutoVariacao" (
    "id" SERIAL NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "cor" TEXT,
    "tamanho" TEXT,
    "modelagem" TEXT,
    "gola" TEXT,
    "estoque" INTEGER NOT NULL DEFAULT 0,
    "sku" TEXT,

    CONSTRAINT "ProdutoVariacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdutoImagem" (
    "id" SERIAL NOT NULL,
    "variacaoId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "tipo" TEXT,
    "ordem" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ProdutoImagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProdutoVariacao_sku_key" ON "ProdutoVariacao"("sku");

-- AddForeignKey
ALTER TABLE "ProdutoVariacao" ADD CONSTRAINT "ProdutoVariacao_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoImagem" ADD CONSTRAINT "ProdutoImagem_variacaoId_fkey" FOREIGN KEY ("variacaoId") REFERENCES "ProdutoVariacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
