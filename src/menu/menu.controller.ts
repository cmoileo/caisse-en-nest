import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from './Dto/menu.dto';

@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) {}

    @Post()
    createMenu(@Body() data:MenuDto) {
        return this.menuService.createMenu(data)
    }

    @Get()
    getMenus() {
        return this.menuService.getMenu()
    }

    @Patch()
    patchMenu(@Body() data:MenuDto) {
        return this.menuService.patchMenu(data)
    }

    @Delete()
    deleteMenu(@Body() data: MenuDto) {
        return this.menuService.deleteMenu(data)
    }
}
