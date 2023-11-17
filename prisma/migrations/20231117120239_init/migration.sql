-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "childrenDobs" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "childrenNames" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "drinksPerDay" TEXT;
