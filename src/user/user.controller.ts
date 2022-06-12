import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() registerUserDto: RegisterUserDto) {
    return await this.userService.register(registerUserDto);
  }

  @Get('find')
  findAll() {
    return this.userService.findAll();
  }

  @Get('find/:id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
