import { Controller } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { Body, HttpCode, HttpStatus, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto)
        //return "Hello"
    }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signin(@Body() dto: AuthDto) {
        return this.authService.login(dto)
        //return "Hello"
    }
}