import { Subjects } from '../../subjects';
import { PaymentMethod } from '../../../enums/payment-method';

export interface OrderCompletedEvent {
  subject: Subjects.OrderCompleted;
  data: {
    orderId: string;
    userId: string;
    restaurantId: string;
    price: number;
    paid_via: PaymentMethod;
    menu_items: {
      item: string;
      quantity: number;
    }[];
    version: number;
    createdAt: Date;
  };
}
