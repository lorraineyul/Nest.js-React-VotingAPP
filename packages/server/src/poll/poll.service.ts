import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Poll } from './poll.entity';
import { Repository } from 'typeorm';
import { PollOption } from './pollOption.entity';

@Injectable()
export class PollService {
  constructor(
    @InjectRepository(Poll)
    private readonly pollRepo: Repository<Poll>,
    @InjectRepository(PollOption)
    private readonly pollOptionRepo: Repository<PollOption>,
  ) {}

  async createPoll(
    userId: string,
    name: string,
    options: string[],
  ): Promise<Boolean> {
    const poll = await this.pollRepo.insert({
      name,
      userId,
    });

    options.map(async (text) => {
      await this.pollOptionRepo.insert({
        text,
        votes: 0,
        pollId: poll.raw[0].id,
      });
    });

    return true;
  }

}
