import { Body, Controller, Post, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/Order.dto';
import { ConnectedSocket, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { create } from 'domain';
import { SocketGateway } from 'src/socket/socket.gateway';

@Controller('order')
// @WebSocketGateway(3001, {
//   cors: true
// })
export class OrderController {
  constructor(
    private orderService: OrderService,
    private readonly socketGateway: SocketGateway
  ) {}

  @WebSocketServer()
  server: Server;

  @Post()
  async createOrder(@ConnectedSocket() client: any, @Body() data: OrderDto) {
    // const clientId = "GT3i7lEb7OVjGHM0AAAD"
    // const socketUserId = client.id
    // const createdOrder = await this.orderService.createOrder(data);
    // this.socketGateway.sendToUser("userId", createdOrder);

    return this.orderService.createOrder(data)
  }
}
