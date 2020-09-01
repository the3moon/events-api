import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateEventDto } from 'src/events/dto/create-event.dto';
import * as mongoose from 'mongoose';

describe('EventsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    await mongoose.connect(process.env.MONGO_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.connection.db.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await app.close();
  });

  it('should add event to db', () => {
    const event: CreateEventDto = {
      email: 'test@test.test',
      eventDate: new Date(),
      firstName: 'Jan',
      lastName: 'Kowalski',
    };

    return request(app.getHttpServer())
      .post('/api/events')
      .send(event)
      .expect(HttpStatus.CREATED)
      .expect(({ body }) => {
        return (
          body.email === event.email &&
          body.eventDate === event.eventDate &&
          body.firstName === event.firstName &&
          body.lastName === event.lastName
        );
      });
  });

  it('should reject invalid event', async () => {
    return request(app.getHttpServer())
      .post('/api/events')
      .send({})
      .expect(HttpStatus.BAD_REQUEST);
  });

  it('should reject invalid email', () => {
    const event: CreateEventDto = {
      email: 'badmail',
      eventDate: new Date(),
      firstName: 'Jan',
      lastName: 'Kowalski',
    };

    return request(app.getHttpServer())
      .post('/api/events')
      .send(event)
      .expect(HttpStatus.BAD_REQUEST)
      .expect(({ body }) => {
        return body.message.includes('email must be an email');
      });
  });

  it('should return events list', () => {
    return request(app.getHttpServer())
      .get('/api/events')
      .expect(HttpStatus.OK)
      .expect(({ body }) => {
        return body.length === 1;
      });
  });
});
