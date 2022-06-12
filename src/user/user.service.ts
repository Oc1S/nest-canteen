import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const user = this.userRepository.create(registerUserDto);
    return await this.userRepository.save(user);
  }
  getUserById(id: number) {
    return this.userRepository.findOne(id);
  }

  findAll() {
    return this.userRepository.find();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
