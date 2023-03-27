import {Name} from './name';
import {Socials} from './socials';

export interface User {
  id: string;
  email: string;
  password: string;
  token: string;
  role: Roles;
}

export interface Profile {
  userId: string;
  name: Name;
  socials: Socials;
  profileImage: string;
  aboutMe: string;
  country: string;
}

enum Roles {
  ADMIN,
  CUSTOMER,
}
