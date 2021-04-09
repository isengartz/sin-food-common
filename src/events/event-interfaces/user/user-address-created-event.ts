import { Subjects } from '../../subjects';

export interface UserAddressCreatedEvent {
  subject: Subjects.UserAddressCreated;
  data: {
    id: string;
    version: number;
    location: {
      type: string;
      coordinates: number[];
    };
  };
}
