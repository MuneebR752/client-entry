/*
  Warnings:

  - Added the required column `clinicCity` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clinicStreetNo` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clinicSuiteNo` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employerCity` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employerPostalCode` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employerStreetNo` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employerSuiteNo` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetNo` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suiteNo` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "city" TEXT,
ADD COLUMN     "clinicCity" TEXT NOT NULL,
ADD COLUMN     "clinicStreetNo" TEXT NOT NULL,
ADD COLUMN     "clinicSuiteNo" TEXT NOT NULL,
ADD COLUMN     "employerCity" TEXT NOT NULL,
ADD COLUMN     "employerPostalCode" TEXT NOT NULL,
ADD COLUMN     "employerStreetNo" TEXT NOT NULL,
ADD COLUMN     "employerSuiteNo" TEXT NOT NULL,
ADD COLUMN     "noOfChildren" TEXT,
ADD COLUMN     "noOfFemaleChildren" TEXT,
ADD COLUMN     "noOfInfantChildren" TEXT,
ADD COLUMN     "noOfMaleChildren" TEXT,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "streetNo" TEXT NOT NULL,
ADD COLUMN     "suiteNo" TEXT NOT NULL;
