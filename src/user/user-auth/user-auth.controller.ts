import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { userSignUpDto } from './dto/userSignup.dto';
import { userSignInDto } from './dto/userSignin.dto';

@Controller('user-auth')
export class UserAuthController {
  constructor(private authService: UserAuthService) {}

  @Post('signup')
  createUser(@Body() data: userSignUpDto) {
    console.log(data);

    return this.authService.createUser(data);
  }

  @Post('signin')
  login(@Body() data: userSignInDto) {
    return this.authService.login(data);
  }
}
