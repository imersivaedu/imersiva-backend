-- CreateEnum
CREATE TYPE "ExperienceStatus" AS ENUM ('BEGINNING', 'ONGOING', 'ENDED');

-- AlterTable
ALTER TABLE "experiences" ADD COLUMN     "status" "ExperienceStatus" NOT NULL DEFAULT 'BEGINNING';
