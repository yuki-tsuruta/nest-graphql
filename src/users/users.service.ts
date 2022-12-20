import { Injectable } from '@nestjs/common';
import { NewUser } from './user/dto/newUser';
import { UserModel } from './user/user';

@Injectable()
export class UsersService {
  create(newUser: NewUser) {
    return 'This action adds a new user';
  }

  findOne(): UserModel[] {
    return [
      {
        id: 1,
        name: 'Yuki',
        age: 10,
        createdAt: new Date(),
      },
      {
        id: 2,
        name: 'gaku',
        age: 90,
        createdAt: new Date(),
      },
    ];
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
