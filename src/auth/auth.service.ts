import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  // 生成token
  createToken(user: Partial<User>) {
    return this.jwtService.sign(user);
  }

  async login(user: Partial<User>) {
    const token = this.createToken({
      id: user.id,
      phone: user.phone,
    });
    return { token, user };
  }

  async getUser(user: Partial<User>) {
    return await this.userService.getUserById(user.id);
  }
}
