/*
  Warnings:

  - Added the required column `jobResponsibilities` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reasonForLastVisit` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "anyMedication" TEXT NOT NULL DEFAULT 'No',
ADD COLUMN     "drinkType" TEXT,
ADD COLUMN     "jobResponsibilities" TEXT NOT NULL,
ADD COLUMN     "reasonForLastVisit" TEXT NOT NULL,
ADD COLUMN     "spouseDob" TEXT,
ADD COLUMN     "spouseName" TEXT,
ADD COLUMN     "whichMedication" TEXT;
