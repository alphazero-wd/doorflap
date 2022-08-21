import { compare, hash } from 'bcrypt';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { PostgresErrorCodes } from '../database/postgres-error-codes.enum';
import { TokenPayload } from './interfaces/token-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  JWT_ACCESS_EXP,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_EXP,
  JWT_REFRESH_SECRET,
  NODE_ENV,
} from '../constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    try {
      const hashedPassoword = await hash(createUserDto.password, 12);
      const newUser = await this.usersService.create({
        ...createUserDto,
        password: hashedPassoword,
      });
      return newUser;
    } catch (error) {
      if (error?.code === PostgresErrorCodes.UniqueViolation) {
        throw new BadRequestException('email already exists');
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) throw new BadRequestException('wrong password');
    // delete user.password;
    return user;
  }

  async getAccessTokenCookie(id: number) {
    const secure =
      this.configService.get(NODE_ENV) === 'production' ? '; Secure' : '';
    const payload: TokenPayload = { sub: id };
    const expiresIn = this.configService.get(JWT_ACCESS_EXP);
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get(JWT_ACCESS_SECRET),
      expiresIn: `${expiresIn}s`,
    });
    return `Access=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}${secure}`;
  }

  async getRefreshTokenCookie(id: number) {
    const secure =
      this.configService.get(NODE_ENV) === 'production' ? '; Secure' : '';
    const payload: TokenPayload = { sub: id };
    const expiresIn = this.configService.get(JWT_REFRESH_EXP);
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get(JWT_REFRESH_SECRET),
      expiresIn: `${expiresIn}s`,
    });
    const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}${secure}`;
    await this.usersService.setRefreshToken(token, id);
    return cookie;
  }

  async getLogoutCookies(id: number) {
    await this.usersService.removeRefreshToken(id);
    const secure =
      this.configService.get(NODE_ENV) === 'production' ? '; Secure' : '';
    return [
      `Access=; HttpOnly; Path=/; Max-Age=0${secure}`,
      `Refresh=; HttpOnly; Path=/; Max-Age=0${secure}`,
    ];
  }
}
