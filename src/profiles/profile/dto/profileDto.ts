import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewProfile {
  @Field()
  name: string;

  @Field((type) => Int)
  age: number;
}
