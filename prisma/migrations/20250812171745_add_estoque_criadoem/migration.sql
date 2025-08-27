-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numeroPedido" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "valorTotal" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "stripeSessionId" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("clienteId", "id", "numeroPedido", "status", "stripeSessionId", "valorTotal") SELECT "clienteId", "id", "numeroPedido", "status", "stripeSessionId", "valorTotal" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
CREATE TABLE "new_Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "categoria" TEXT,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Produto" ("categoria", "createdAt", "description", "id", "image", "price", "title") SELECT "categoria", "createdAt", "description", "id", "image", "price", "title" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE UNIQUE INDEX "Produto_title_key" ON "Produto"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
