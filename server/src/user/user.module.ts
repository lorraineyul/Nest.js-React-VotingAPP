import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { User } from './user.entity';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UserModule {}
