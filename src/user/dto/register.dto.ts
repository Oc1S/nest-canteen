import { IsNotEmpty, IsNumberString, IsOptional } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  nickname: string;
  @IsNotEmpty()
  password: string;
  @IsNumberString()
  phone: number;

  @IsOptional()
  avatar: string;
  @IsOptional()
  email: string;
}
