import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CategoryDto } from './dto/category.dto';
import { parse } from 'path';

@Injectable()
export class categoryService {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createCategory(data: CategoryDto, file: Express.Multer.File) {
    const parsedId =
      typeof data.admin_id === 'string'
        ? parseInt(data.admin_id)
        : data.admin_id;
    const parsedMenuId =
      typeof data.menu_id === 'string' ? parseInt(data.menu_id) : data.menu_id;
    console.log(file);
    const createdCategory = await this.prisma.category.create({
      data: {
        name: data.name,
        description: data.description,
        admin_id: parsedId,
        price: data.price,
        menu_id: parsedMenuId,
        imageUrl: `/images/${file.filename}`,
      },
    });
    return createdCategory;
  }

  async getCategory() {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  async patchCategory(data: CategoryDto, file: Express.Multer.File) {
    const parsedId =
      typeof data.admin_id === 'string'
        ? parseInt(data.admin_id)
        : data.admin_id;
    const parsedMenuId =
      typeof data.menu_id === 'string' ? parseInt(data.menu_id) : data.menu_id;
    const updatedCategory = await this.prisma.category.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        description: data.description,
        admin_id: parsedId,
        price: data.price,
        menu_id: parsedMenuId,
        imageUrl: file.path,
      },
    });

    return updatedCategory;
  }

  async deleteCategory(data: CategoryDto) {
    const deletedCategory = await this.prisma.category.delete({
      where: {
        id: data.id,
      },
    });
    return true;
  }
}
