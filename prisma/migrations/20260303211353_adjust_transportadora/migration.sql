/*
  Warnings:

  - You are about to drop the column `numeroPedido` on the `ComprovanteEntrega` table. All the data in the column will be lost.
  - You are about to drop the column `promocaoId` on the `ItemPedido` table. All the data in the column will be lost.
  - You are about to drop the column `codigoExterno` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `pixCodigo` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `pixQrCodeBase64` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `pixStatus` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `pixTxid` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `stripePaymentIntentId` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `stripeStatus` on the `Pagamento` table. All the data in the column will be lost.
  - You are about to drop the column `stripeSessionId` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Transportadora` table. All the data in the column will be lost.
  - You are about to drop the `VendaResumo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Pedido_stripeSessionId_key";

-- DropIndex
DROP INDEX "Transportadora_numero_key";

-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "empresaId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ComprovanteEntrega" DROP COLUMN "numeroPedido";

-- AlterTable
ALTER TABLE "ItemPedido" DROP COLUMN "promocaoId";

-- AlterTable
ALTER TABLE "Pagamento" DROP COLUMN "codigoExterno",
DROP COLUMN "descricao",
DROP COLUMN "pixCodigo",
DROP COLUMN "pixQrCodeBase64",
DROP COLUMN "pixStatus",
DROP COLUMN "pixTxid",
DROP COLUMN "stripePaymentIntentId",
DROP COLUMN "stripeStatus";

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "stripeSessionId";

-- AlterTable
ALTER TABLE "Transportadora" DROP COLUMN "numero",
ALTER COLUMN "fretePadrao" SET DEFAULT 0;

-- DropTable
DROP TABLE "VendaResumo";
