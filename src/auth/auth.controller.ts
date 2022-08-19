import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RequestUser } from './interfaces/req-user.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Req() { user, res }: RequestUser) {
    const accessTokenCookie = await this.authService.getAccessTokenCookie(
      user.id,
    );
    const refreshTokenCookie = await this.authService.getRefreshTokenCookie(
      user.id,
    );
    res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
    return user;
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() { user }: RequestUser) {
    return user;
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Get('refresh')
  async refresh(@Req() { user, res }: RequestUser) {
    const accessToken = await this.authService.getAccessTokenCookie(user.id);
    res.setHeader('Set-Cookie', accessToken);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @Post('logout')
  async logout(@Req() { res, user }: RequestUser) {
    res.setHeader(
      'Set-Cookie',
      await this.authService.getLogoutCookies(user.id),
    );
    return { logout: true };
  }
}
