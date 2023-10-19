import { Injectable } from '@nestjs/common';
import { MenuDto } from './Dto/menu.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MenuService {
    private readonly prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
    }

    async createMenu(data: MenuDto, file: Express.Multer.File) {
        const parsedId = typeof data.admin_id === "string" ? parseInt(data.admin_id) : data.admin_id
        try {
            const newMenu = await this.prisma.menu.create({
                data: {
                    name: data.name,
                    description: data.description,
                    admin_id: parsedId,
                    price: data.price,
                    imageUrl: file.path
                }
            })
            return newMenu
        } catch (err) {
            console.log(err)
            return err
        }
    }
    async getMenu() {
        try {
            const menus = await this.prisma.menu.findMany()
            return menus
        } catch (err) {
            return err
        }
    }

    async patchMenu(data: MenuDto) {
        const parsedId = typeof data.admin_id === "string" ? parseInt(data.admin_id) : data.admin_id
        try {
            const patchedMenu = await this.prisma.menu.update({
                where: {
                    id: data.id
                },
                data: {
                    name: data.name,
                    description: data.description,
                    admin_id: parsedId,
                    price: data.price
                }
            })
        } catch (err) {
            return err
        }
    }

    async deleteMenu(data: MenuDto) {
        try {
            const deleteMenu = await this.prisma.menu.delete({
                where: {
                    id: data.admin_id
                }
            })
            return true
        } catch (err) {
            return err
        }
    }
}
