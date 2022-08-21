import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_ACCESS_SECRET } from '../../constants';
import { UsersService } from '../../users/users.service';
import { TokenPayload } from '../interfaces/token-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req.cookies?.Access,
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get(JWT_ACCESS_SECRET),
    });
  }

  validate({ sub }: TokenPayload) {
    return this.usersService.findOne(sub);
  }
}
