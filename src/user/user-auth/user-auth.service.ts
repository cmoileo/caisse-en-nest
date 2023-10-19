import { Injectable } from '@nestjs/common';
import { userSignUpDto } from './dto/userSignup.dto';
import { userSignInDto } from './dto/userSignin.dto';
import { PrismaClient } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserAuthService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: userSignUpDto) {
    const plainPassword = data.password;
    const saltRounds = 10;

    try {
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
      console.log(hashedPassword);
      const createdUser = await this.prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          lastName: data.lastname,
          firstName: data.firstname,
          adresse: data.adresse,
        },
      });
      const payload = { sub: createdUser.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
      return token;
    } catch (err) {
      return err;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async login(data: userSignInDto) {
    const plainPassword = data.password;
    const email = data.email;

    try {
      const getUser = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (getUser) {
        const match = await bcrypt.compare(plainPassword, getUser.password);

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
