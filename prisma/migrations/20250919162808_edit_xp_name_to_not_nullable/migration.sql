/*
  Warnings:

  - Added the required column `name` to the `experiences` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "schools" DROP CONSTRAINT "schools_userId_fkey";

-- AlterTable
ALTER TABLE "experiences" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "schools" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
