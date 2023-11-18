/*
  Warnings:

  - You are about to drop the column `childDobs` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `childNames` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "childDobs",
DROP COLUMN "childNames";

-- CreateTable
CREATE TABLE "Children" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Children_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Children" ADD CONSTRAINT "Children_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
