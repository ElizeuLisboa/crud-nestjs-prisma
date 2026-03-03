/*
  Warnings:

  - A unique constraint covering the columns `[nome,familiaId,empresaId]` on the table `CategoriaProduto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `empresaId` to the `CategoriaProduto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresaId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CategoriaProduto_nome_familiaId_key";

-- AlterTable
ALTER TABLE "CategoriaProduto" ADD COLUMN     "empresaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "empresaId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CategoriaProduto_nome_familiaId_empresaId_key" ON "CategoriaProduto"("nome", "familiaId", "empresaId");

-- AddForeignKey
ALTER TABLE "CategoriaProduto" ADD CONSTRAINT "CategoriaProduto_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
