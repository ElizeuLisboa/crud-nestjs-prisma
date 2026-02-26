/*
  Warnings:

  - You are about to drop the column `categoria` on the `Produto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Produto" DROP COLUMN "categoria",
ADD COLUMN     "categoriaId" INTEGER;

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
CREATE TABLE "public"."CategoriaProduto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "familiaId" INTEGER NOT NULL,

    CONSTRAINT "CategoriaProduto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Produto" ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."CategoriaProduto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FamiliaProduto" ADD CONSTRAINT "FamiliaProduto_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "public"."GrupoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CategoriaProduto" ADD CONSTRAINT "CategoriaProduto_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "public"."FamiliaProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
