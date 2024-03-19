import { User } from "app/shared/models/user.model";

export interface LoginResponseDto {
  user: User;
  token: string;
}
