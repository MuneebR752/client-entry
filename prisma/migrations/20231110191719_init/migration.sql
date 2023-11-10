/*
  Warnings:

  - Added the required column `clinicPostalCode` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "clinicPostalCode" TEXT NOT NULL;
