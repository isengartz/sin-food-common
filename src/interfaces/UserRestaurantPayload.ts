import { UserRole } from '../enums/user-roles';

export interface UserRestaurantPayload {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}
