/*
  Warnings:

  - A unique constraint covering the columns `[nome,familiaId]` on the table `CategoriaProduto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "mensagemCupom" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoriaProduto_nome_familiaId_key" ON "CategoriaProduto"("nome", "familiaId");
