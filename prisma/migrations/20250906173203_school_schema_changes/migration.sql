-- AlterTable
ALTER TABLE "experiences" ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "schools" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
