import { Subjects } from '../../subjects';

export interface RestaurantReviewCreatedEvent {
  subject: Subjects.RestaurantReviewCreated;
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
