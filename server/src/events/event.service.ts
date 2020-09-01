import { Injectable } from '@nestjs/common';
import { Event } from './schemas/event.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async findAll(): Promise<Event[]> {
    return await this.eventModel.find();
  }

  async store(createEventDto: CreateEventDto): Promise<Event> {
    const newEvent = await new this.eventModel(createEventDto);
    return await newEvent.save();
  }
}
