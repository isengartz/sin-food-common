import { Subjects } from '../../subjects';
import { UserRole } from '../../../enums/user-roles';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    version: number;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    role: UserRole;
  };
}
