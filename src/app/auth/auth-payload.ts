import { User } from '../models/user';

export interface AuthPayload {
    user: User;
    token: string;
}
