-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_admin_id_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "admin_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
