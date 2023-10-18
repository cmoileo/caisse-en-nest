-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_menu_id_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "menu_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
