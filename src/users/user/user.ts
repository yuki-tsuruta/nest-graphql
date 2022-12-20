import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field((type) => ID)
  id: number;

  @Field((type) => String)
  name: string;

  @Field((type) => Int)
  age: number;

  @Field()
  createdAt: Date;
}
