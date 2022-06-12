import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(), OrderModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
  // constructor() {}
}
