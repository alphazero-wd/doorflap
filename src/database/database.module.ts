import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_URL, NODE_ENV } from '../constants';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get(DATABASE_URL),
        entities: [path.join(__dirname, '/../**/*.entity.{ts,js}')],
        synchronize: configService.get(NODE_ENV) !== 'production',
      }),
    }),
  ],
})
export class DatabaseModule {}
