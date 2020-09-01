import { Module } from '@nestjs/common';
import { EventsModule } from './events/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'test'
        ? process.env.MONGO_URI_TEST
        : process.env.MONGO_URI,
    ),
    EventsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/build'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
