-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "statusInCanada" TEXT NOT NULL DEFAULT 'Citizen',
    "arrivalDate" TEXT,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "yearsInCanada" TEXT NOT NULL,
    "birthCountry" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL DEFAULT 'Single',
    "workStatus" TEXT NOT NULL DEFAULT 'Employed',
    "occupation" TEXT NOT NULL,
    "employerName" TEXT NOT NULL,
    "employerAddress" TEXT NOT NULL,
    "annualIncome" TEXT NOT NULL,
    "smokingStatus" TEXT NOT NULL DEFAULT 'Non-Smoker',
    "drinkingStatus" TEXT NOT NULL DEFAULT 'Non-Drinker',
    "familyDoctor" TEXT NOT NULL,
    "clinicAddress" TEXT NOT NULL,
    "doctorLastVisit" TEXT NOT NULL,
    "anyFamilyHistory" TEXT NOT NULL,
    "anyHealthIssues" TEXT NOT NULL,
    "dangerousSports" TEXT NOT NULL,
    "replacingOldPolicy" TEXT NOT NULL,
    "anyLicenceSuspension" TEXT NOT NULL,
    "faceAmount" TEXT NOT NULL,
    "beneficiary1" TEXT NOT NULL,
    "beneficiary2" TEXT NOT NULL,
    "assets" TEXT NOT NULL,
    "liabilities" TEXT NOT NULL,
    "bankNumber" TEXT NOT NULL,
    "transitNumber" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_phone_key" ON "Client"("phone");
