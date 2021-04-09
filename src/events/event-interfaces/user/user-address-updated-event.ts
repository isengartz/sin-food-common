import { Subjects } from '../../subjects';

export interface UserAddressUpdatedEvent {
  subject: Subjects.UserAddressUpdated;
  data: {
    id: string;
    version: number;
    location: {
      type: string;
      coordinates: number[];
    };
  };
}
