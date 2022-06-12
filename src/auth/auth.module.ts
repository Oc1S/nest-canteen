import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './jwt.strategy';

const jwtModule = JwtModule.register({
  secret: 'SECRET_KEY',
  signOptions: { expiresIn: '7d' },
});

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, jwtModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
  exports: [jwtModule],
})
export class AuthModule {}
