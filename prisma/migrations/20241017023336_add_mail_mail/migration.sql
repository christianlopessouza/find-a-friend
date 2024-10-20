/*
  Warnings:

  - You are about to drop the column `address` on the `organization_addresses` table. All the data in the column will be lost.
  - Added the required column `addressNumber` to the `organization_addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCodeId` to the `organization_addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `organizations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `organizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organization_addresses" DROP COLUMN "address",
ADD COLUMN     "addressComplement" TEXT,
ADD COLUMN     "addressNumber" TEXT NOT NULL,
ADD COLUMN     "postalCodeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "postal_codes" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "postal_codes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "organization_addresses" ADD CONSTRAINT "organization_addresses_postalCodeId_fkey" FOREIGN KEY ("postalCodeId") REFERENCES "postal_codes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postal_codes" ADD CONSTRAINT "postal_codes_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postal_codes" ADD CONSTRAINT "postal_codes_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
