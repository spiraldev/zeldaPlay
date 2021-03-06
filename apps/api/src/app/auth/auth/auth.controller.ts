import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleGuard } from '../../guards/google.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('google'))
  @Get('google/login')
  async googleLogin() {}

  @UseGuards(GoogleGuard)
  @Get('google/callback')
  async googleCallback(@Req() req: any) {
    return req.user;
  }
}
