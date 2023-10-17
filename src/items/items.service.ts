import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class ItemsService {
    private readonly prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
    }

    async createCategory(data: CategoryDto) {
        const createdCategory = await this.prisma.category.create({
            data: {
                name: data.name,
                description: data.description,
                admin_id: data.admin_id,
                price: data.price
            }
        })
        return createdCategory
    }

    async getCategory() {
        const categories = await this.prisma.category.findMany()
        return categories
    }

    async patchCategory(data: CategoryDto) {
        const updatedCategory = await this.prisma.category.update({
            where: {
                id: data.id,
            },
            data: {
                name: data.name,
                description: data.description,
                admin_id: data.admin_id,
                price: data.price,
            },
        });
    
        return updatedCategory;
    }

    async deleteCategory(data: CategoryDto) {
        const deletedCategory = await this.prisma.category.delete({
            where: {
                id: data.id
            }
        })
    }
    
}
