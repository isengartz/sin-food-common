import { Subjects } from '../subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    addresses: {
      description:string;
      floor: string,
      full_address: string,
      latitude: string,
      longitude: string,
    }[];
    phone: string;
    created_at: Date;
    password_changed_at: Date;
    password_reset_token: string,
    password_reset_expires: Date
  };
}
