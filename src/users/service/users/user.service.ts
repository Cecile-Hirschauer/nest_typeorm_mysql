import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from '../../../utils/Types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  findOneUser(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  createUser(userDetails: CreateUserParams) {
    const newuser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newuser);
  }

  updateUser(id: number, updateUserDetail: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetail });
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
