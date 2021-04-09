import { Subjects } from '../../subjects';

export interface RestaurantDeletedEvent {
  subject: Subjects.RestaurantDeleted;
  data: {
    id: string;
    version: number;
  };
}
