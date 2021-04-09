import { Subjects } from '../../subjects';

export interface UserAddressDeletedEvent {
  subject: Subjects.UserAddressDeleted;
  data: {
    id: string;
    version: number;
  };
}
