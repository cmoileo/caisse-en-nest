-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_admin_id_fkey";

-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "admin_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
