import { Subjects } from '../../subjects';
import { UserRole } from '../../../enums/user-roles';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
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
