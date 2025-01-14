import { Module } from '@nestjs/common';
import { ProfilesResolver } from './profiles.resolver';
import { ProfilesService } from './profiles.service';

@Module({
  providers: [ProfilesResolver, ProfilesService],
})
export class ProfilesModule {}
