import { Module } from '@nestjs/common';
import { EventsModule } from './events/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'test'
        ? process.env.MONGO_URI_TEST
        : process.env.MONGO_URI,
    ),
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
