import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/SignUp.dto';
import { SignInDto } from './dto/SignInDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiTags('admin')
  @Post('signup')
  signUp(@Body() data: SignUpDto): Promise<string> {
    console.log(data);
    return this.authService.signUp(data);
  }

  @ApiTags('admin')
  @Post('signin')
  signIn(@Body() data: SignInDto) {
    return this.authService.signIn(data);
  }
}
