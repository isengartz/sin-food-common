import { Subjects } from '../../subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    orderId: string;
    version: number;
  };
}
