/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `Transportadora` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `empresaId` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "empresaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transportadora" ADD COLUMN     "numero" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Transportadora_numero_key" ON "Transportadora"("numero");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
