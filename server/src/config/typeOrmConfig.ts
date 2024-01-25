import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const typeOrmConfig:PostgresConnectionOptions = {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'velvetdionysus',
      password: '',
      database: 'votingapp',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      subscribers: [__dirname + '/../subscribers/*.subscriber{.ts,.js}'],
}