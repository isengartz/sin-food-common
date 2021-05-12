import { Subjects } from '../../subjects';

export interface RestaurantReviewDeletedEvent {
  subject: Subjects.RestaurantReviewDeleted;
  data: {
    id: string;
    version: Number;
  };
}
