import { Poll } from "src/poll/poll.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Poll, poll => poll.user)
  poll: Promise<Poll[]>;
}