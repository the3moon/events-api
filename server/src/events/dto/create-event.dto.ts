import { IsNotEmpty, IsEmail, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsDateString()
  readonly eventDate: Date;
}
