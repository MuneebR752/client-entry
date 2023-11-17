/*
  Warnings:

  - You are about to drop the column `childrenDobs` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `childrenNames` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "childrenDobs",
DROP COLUMN "childrenNames",
ADD COLUMN     "childDobs" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "childNames" TEXT[] DEFAULT ARRAY[]::TEXT[];
