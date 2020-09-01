import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { EventsService } from './event.service';
import { Event } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { validationPipe } from '../validation';

@Controller('api/events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return await this.eventsService.findAll();
  }

  @Post()
  @UsePipes(validationPipe)
  async store(@Body() createEventDTO: CreateEventDto): Promise<Event> {
    return await this.eventsService.store(createEventDTO);
  }
}
