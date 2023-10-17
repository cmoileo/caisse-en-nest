import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { SignInDto } from './dto/SignInDto';

@Injectable()
export class AuthService {
    private readonly prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
    }

    async signUp(data: SignUpDto): Promise<string> {
        const plainPassword = data.password
        const saltRounds = 10

        try {
            const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
            const createAdmin = await this.prisma.admin.create({
                data: {
                    email: data.email,
                    password: hashedPassword,
                    name: data.name
                }
            })
            const payload = { sub: createAdmin.email };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
            return token
        }
        catch (err) {
            throw err
        } finally {
            await this.prisma.$disconnect();
        }
    }


    async signIn(data: SignInDto) {
        const plainPassword = data.password;
        const email = data.email;
    
        try {
            const getAdmin = await this.prisma.admin.findUnique({
                where: {
                    email: email
                }
            });
    
            if (getAdmin) {
                const match = await bcrypt.compare(plainPassword, getAdmin.password);
    
                if (match) {
                    const payload = { sub: email };
                    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
                    return token;
                }
            }
        } catch (err) {
            return false;
        }
        return false;
    }
}
