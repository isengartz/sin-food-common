import { Weekdays } from '../../../enums/working-days';
import { Subjects } from '../../subjects';

export interface RestaurantCreatedEvent {
  subject: Subjects.RestaurantCreated;
  data: {
    id: string;
    version: number;
    working_hours: {
      day: Weekdays;
      open: number;
      close: number;
    }[];
    holidays: [Date];
    delivers_to: {
      type?: string;
      coordinates: number[][][];
    };
    categories: string[];
  };
}