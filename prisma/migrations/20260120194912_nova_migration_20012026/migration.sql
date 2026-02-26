/*
  Warnings:

  - You are about to drop the column `grupoId` on the `FamiliaProduto` table. All the data in the column will be lost.
  - You are about to drop the `GrupoProduto` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `familiaId` on table `CategoriaProduto` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CategoriaProduto" DROP CONSTRAINT "CategoriaProduto_familiaId_fkey";

-- DropForeignKey
ALTER TABLE "FamiliaProduto" DROP CONSTRAINT "FamiliaProduto_grupoId_fkey";

-- DropIndex
DROP INDEX "CategoriaProduto_nome_key";

-- AlterTable
ALTER TABLE "CategoriaProduto" ALTER COLUMN "familiaId" SET NOT NULL;

-- AlterTable
ALTER TABLE "FamiliaProduto" DROP COLUMN "grupoId";

-- DropTable
DROP TABLE "GrupoProduto";

-- AddForeignKey
ALTER TABLE "CategoriaProduto" ADD CONSTRAINT "CategoriaProduto_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "FamiliaProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
