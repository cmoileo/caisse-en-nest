import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/Order.dto';
import { AuthGuard } from '../user-auth/user.guard';

@UseGuards(AuthGuard)
@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {
    }

    @Post()
    createOrder(@Body() data:OrderDto) {
        return this.orderService.createOrder(data)
    }
}