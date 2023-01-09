import { Injectable } from '@nestjs/common';
import { NewProfile } from './profile/dto/profileUser';
import { ProfileModel } from './profile/profile';

@Injectable()
export class ProfilesService {
  create(newProfile: NewProfile) {
    return 'This action adds a new user';
  }

  findOne(): ProfileModel[] {
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
