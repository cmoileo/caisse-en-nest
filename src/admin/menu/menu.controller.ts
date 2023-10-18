import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from './Dto/menu.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @ApiTags('menu')
  @Post()
  createMenu(@Body() data: MenuDto) {
    return this.menuService.createMenu(data);
  }

  @ApiTags('menu')
  @Get()
  getMenus() {
    return this.menuService.getMenu();
  }

  @ApiTags('menu')
  @Patch()
  patchMenu(@Body() data: MenuDto) {
    return this.menuService.patchMenu(data);
  }

  @ApiTags('menu')
  @Delete()
  deleteMenu(@Body() data: MenuDto) {
    return this.menuService.deleteMenu(data);
  }
}
