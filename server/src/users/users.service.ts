import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async setRefreshToken(refreshToken: string, id: number) {
    const userRefreshToken = await hash(refreshToken, 10);
    await this.usersRepository.update(id, { refreshToken: userRefreshToken });
    return { set: true };
  }

  async validateRefreshToken(refreshToken: string, id: number) {
    const user = await this.findOne(id);
    const isCorrectRefreshToken = await compare(
      refreshToken,
      user.refreshToken,
    );
    if (isCorrectRefreshToken) return user;
  }

  async removeRefreshToken(id: number) {
    await this.usersRepository.update(id, { refreshToken: null });
    return { delete: true };
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
