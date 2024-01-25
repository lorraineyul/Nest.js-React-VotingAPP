import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth.guard';
import { GetUserId } from './getUserId.decorator';
import { CreatePollArgs } from './args/createPollArgs.args';
import { PollService } from './poll.service';
import { PollOption } from './pollOption.entity';
import { MyContext } from 'src/types/myContext';

@Resolver('Poll')
export class PollResolver {
  constructor(private readonly pollService: PollService) {}

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  async createPoll(
    @GetUserId() userId: string,
    @Args() { name, options }: CreatePollArgs,
  ): Promise<Boolean> {
    return this.pollService.createPoll(userId, name, options);
  }

}
