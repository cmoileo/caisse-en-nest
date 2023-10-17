import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}
    @Post()
    createCategory(@Body() data:CategoryDto) {
        return this.itemsService.createCategory(data)
    }

    @Get()
    getCategory() {
        return this.itemsService.getCategory()
    }

    @Patch()
    modifyCategory(@Body() data:CategoryDto) {
        return this.itemsService.patchCategory(data)
    }

    @Delete()
    deleteCategory(@Body() data:CategoryDto) {
        return this.itemsService.deleteCategory(data)
    }
}
