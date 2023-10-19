import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { SocketGateway } from 'src/socket/socket.gateway';

@Module({
  controllers: [OrderController],
  providers: [OrderService, SocketGateway],
})
export class OrderModule {}