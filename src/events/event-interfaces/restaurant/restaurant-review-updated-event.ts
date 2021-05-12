import { Subjects } from '../../subjects';

export interface RestaurantReviewUpdatedEvent {
  subject: Subjects.RestaurantReviewUpdated;
  data: {
    id: string;
    orderId: string;
    restaurant: string;
    userId: string;
    rating: Number;
    comment: string;
    version: Number;
    createdAt: Date;
    updatedAt: Date;
  };
}
