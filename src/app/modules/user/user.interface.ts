/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TLoginUser = {
  username: string;
  password: string;
};

export interface TUser {
  _id: string;
  username: string;
  password: string;
  role?: 'user';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByUserName(username: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isPasswordUsedBefore(
    plainTextPassword: string,
    userData: TUser,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
