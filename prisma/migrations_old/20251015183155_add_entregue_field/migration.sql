/*
  Warnings:

  - You are about to drop the column `dataEntrega` on the `ComprovanteEntrega` table. All the data in the column will be lost.
  - You are about to drop the column `entregadorNome` on the `ComprovanteEntrega` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pedidoId]` on the table `ComprovanteEntrega` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."ComprovanteEntrega" DROP COLUMN "dataEntrega",
DROP COLUMN "entregadorNome";

-- AlterTable
ALTER TABLE "public"."Pedido" ADD COLUMN     "entregue" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "ComprovanteEntrega_pedidoId_key" ON "public"."ComprovanteEntrega"("pedidoId");
