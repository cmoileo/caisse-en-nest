import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/SignUp.dto';
import { SignInDto } from './dto/SignInDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post()
    signUp(@Body() data:SignUpDto): Promise<string> {
        return this.authService.signUp(data)
    }

    @Get()
    signIn(@Body() data:SignInDto) {
        return this.authService.signIn(data)
    }
}
