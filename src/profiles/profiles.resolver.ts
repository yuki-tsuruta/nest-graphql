import { Inject, NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewProfile } from './profile/dto/profileUser';
import { ProfileModel } from './profile/profile';
import { ProfilesService } from './profiles.service';

@Resolver((of) => ProfileModel)
export class ProfilesResolver {
  constructor(
    @Inject(ProfilesService) private profilesService: ProfilesService,
  ) {}

  @Query((returns) => [ProfileModel], { name: 'profiles', nullable: true })
  getProfile() {
    const user = this.profilesService.findOne();
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @Mutation((returns) => String)
  createProfile(@Args('newProfile') newProfile: NewProfile): string {
    return this.profilesService.create(newProfile);
  }

  @Mutation((returns) => Boolean)
  async removeProfile(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.profilesService.remove(id);
  }
}
