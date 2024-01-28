import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { PollOption } from './pollOption.entity';
import { Poll } from './poll.entity';
import { PollService } from './poll.service';
import { PollResolver } from './poll.resolver';


@Module({
  imports: [
    TypeOrmModule.forFeature([Poll, PollOption])],
  providers: [PollService, PollResolver],
})
export class PollModule {}