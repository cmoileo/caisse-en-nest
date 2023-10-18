import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { categoryService } from './category.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('category')
export class categoryController {
    constructor(private categoryService: categoryService) {}
    @Post()
    createCategory(@Body() data:CategoryDto) {
        return this.categoryService.createCategory(data)
    }

    @Get()
    getCategory() {
        return this.categoryService.getCategory()
    }

    @Patch()
    modifyCategory(@Body() data:CategoryDto) {
        return this.categoryService.patchCategory(data)
    }

    @Delete()
    deleteCategory(@Body() data:CategoryDto) {
        return this.categoryService.deleteCategory(data)
    }
}
