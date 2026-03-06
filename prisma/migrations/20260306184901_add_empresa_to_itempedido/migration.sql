/*
  Warnings:

  - Added the required column `empresaId` to the `ItemPedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemPedido" ADD COLUMN     "empresaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
