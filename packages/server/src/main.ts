import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { SESSION_SECRET } from './constants';


//dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      name: 'votingapp',
      secret: SESSION_SECRET,
      cookie: {httpOnly:true, secure: process.env.NODE_ENV === 'production' },
    }),
  );
  await app.listen(3000);
}
bootstrap();
