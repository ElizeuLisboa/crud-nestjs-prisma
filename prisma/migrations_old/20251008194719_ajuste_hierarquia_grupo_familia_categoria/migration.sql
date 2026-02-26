/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `CategoriaProduto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `FamiliaProduto` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."CategoriaProduto" DROP CONSTRAINT "CategoriaProduto_familiaId_fkey";

-- AlterTable
ALTER TABLE "public"."CategoriaProduto" ALTER COLUMN "familiaId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CategoriaProduto_nome_key" ON "public"."CategoriaProduto"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "FamiliaProduto_nome_key" ON "public"."FamiliaProduto"("nome");

-- AddForeignKey
ALTER TABLE "public"."CategoriaProduto" ADD CONSTRAINT "CategoriaProduto_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "public"."FamiliaProduto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
