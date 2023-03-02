import { Module } from '@nestjs/common';
import { UserController } from './controller/users/user.controller';
import { UserService } from './service/users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
