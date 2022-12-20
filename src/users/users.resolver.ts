import { Inject, NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewUser } from './user/dto/newUser';
import { UserModel } from './user/user';
import { UsersService } from './users.service';

@Resolver((of) => UserModel)
export class UsersResolver {
  constructor(@Inject(UsersService) private usersService: UsersService) {}

  @Query((returns) => [UserModel], { name: 'users', nullable: true })
  getUser() {
    const user = this.usersService.findOne();
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @Mutation((returns) => String)
  createUser(@Args('newUser') newUser: NewUser): string {
    return this.usersService.create(newUser);
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
