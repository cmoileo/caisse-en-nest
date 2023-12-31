import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { userSignUpDto } from './dto/userSignup.dto';
import { userSignInDto } from './dto/userSignin.dto';

@Controller('user-auth')
export class UserAuthController {
  constructor(private authService: UserAuthService) {}

  @Post('signup')
  createUser(@Body() data: userSignUpDto) {
    return this.authService.createUser(data);
  }

  @Post('signin')
  login(@Body() data: userSignInDto) {
    return this.authService.login(data);
  }

  @Get()
  getUser() {
    return this.authService.getUser();
  }
}
