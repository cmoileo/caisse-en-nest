import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import * as jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthGuard implements CanActivate {
    private readonly prisma: PrismaClient
    constructor(
        private reflector: Reflector,
    ) {
        this.prisma = new PrismaClient();
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const token = context.switchToHttp().getRequest().headers?.authorization;
        const secretKey = process.env.JWT_SECRET_KEY;

        try {
            const decoded: any = await jwt.verify(token, secretKey);
            const eventIdFromToken = decoded.eventId;
            const eventId = context.switchToHttp().getRequest().params.eventId;

            if (eventIdFromToken === eventId) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
}