import { Subjects } from '../../subjects';

export interface RestaurantReviewUpdatedEvent {
  subject: Subjects.RestaurantReviewUpdated;
  data: {
    id: string;
    orderId: string;
    restaurant: string;
    userId: string;
    rating: number;
    comment: string;
    version: number;
    createdAt: Date;
    updatedAt: Date;
  };
}
