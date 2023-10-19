// socket.gateway.ts
import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  private readonly connectedClients = new Map<string, string>()

  handleConnection(client: any, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
    const userId = 'userIdHere';
    this.connectedClients.set(userId, client.id);
  }

  sendToUser(userId: string, data: any) {
    const socketId = this.connectedClients.get(userId);
    if (socketId) {
      this.server.to(socketId).emit('yourEventName', data);
    }
  }
}