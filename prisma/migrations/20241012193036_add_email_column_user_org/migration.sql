/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `organization_users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `organization_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `organization_users` table without a default value. This is not possible if the table is not empty.
  - Made the column `raceId` on table `pets` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_raceId_fkey";

-- AlterTable
ALTER TABLE "organization_users" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" ALTER COLUMN "raceId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "organization_users_email_key" ON "organization_users"("email");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "races"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
