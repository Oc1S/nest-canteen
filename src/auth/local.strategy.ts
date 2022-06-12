import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compareSync } from 'bcryptjs';
import { PassportStrategy } from '@nestjs/passport';
import { IStrategyOptions, Strategy } from 'passport-local';
import { User } from 'src/user/entities/user.entity';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super({
      usernameField: 'phone',
      passwordField: 'password',
    } as IStrategyOptions);
  }

  async validate(phone: number, password: string) {
    /* const [user] = await this.userRepository.find({
      where: { phone },
    }); */
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.phone=:phone', { phone })
      .getOne();

    console.log(user);

    if (!user) {
      throw new BadRequestException('账号未注册！');
    }

    if (!compareSync(password, user.password)) {
      throw new BadRequestException('密码错误！');
    }

    return user;
  }
}
