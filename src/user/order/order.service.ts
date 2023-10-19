import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/Order.dto';
import { PrismaClient } from '@prisma/client';
 
@Injectable()
export class OrderService {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createOrder(data: OrderDto) {
        try {
            const createdOrder = await this.prisma.order.create({
                data: {
                    user_name: data.userName,
                    description: data.description,
                    price: data.price,
                    isFinished: data.isFinished,
                    admin_id: data.adminId,
                    user_id: data.userId
                }
            });


            return createdOrder;
        } catch (error) {
            return error;
        }
    }
}
