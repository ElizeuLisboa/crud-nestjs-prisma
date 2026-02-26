/*
  Warnings:

  - A unique constraint covering the columns `[codigoBarras]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."Role" ADD VALUE 'CAIXA';
ALTER TYPE "public"."Role" ADD VALUE 'CLIENTE';

-- AlterTable
ALTER TABLE "public"."Cliente" ALTER COLUMN "role" SET DEFAULT 'CLIENTE';

-- CreateIndex
CREATE UNIQUE INDEX "Produto_codigoBarras_key" ON "public"."Produto"("codigoBarras");
