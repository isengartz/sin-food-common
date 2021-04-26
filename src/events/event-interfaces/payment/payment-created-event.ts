import { Subjects } from '../../subjects';
import { PaymentMethod } from '../../../enums/payment-method';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    payment_method: PaymentMethod;
    paymentId: string;
    version: number;
    createdAt: Date;
  };
}
