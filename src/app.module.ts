import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './admin/auth/auth.module';
import { categoryModule } from './admin/category/category.module';
import { ProductController } from './admin/product/product.controller';
import { ProductService } from './admin/product/product.service';
import { ProductModule } from './admin/product/product.module';
import { MenuModule } from './admin/menu/menu.module';
import { UserAuthModule } from './user/user-auth/user-auth.module';
import { OrderModule } from './user/order/order.module';
import { KitchenController } from './admin/kitchen/kitchen.controller';
import { KitchenService } from './admin/kitchen/kitchen.service';
import { KitchenModule } from './admin/kitchen/kitchen.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [AuthModule, categoryModule, ProductModule, MenuModule, UserAuthModule, OrderModule, KitchenModule, SocketModule],
  controllers: [AppController, ProductController, KitchenController],
  providers: [AppService, ProductService, KitchenService],
})
export class AppModule {}
