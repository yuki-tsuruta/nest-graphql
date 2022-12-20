import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewUser {
  @Field()
  name: string;

  @Field((type) => Int)
  age: number;
}
