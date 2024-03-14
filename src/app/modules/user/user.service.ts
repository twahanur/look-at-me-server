/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import { createToken, verifyToken } from './user.utils';

const createUserIntoDB = async (payload: TUser) => {
  const data = await User.create(payload);
  const result = {
    _id: data._id,
    username: data.username,
    role: data.role,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
  return result;
};

const userLogin = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByUserName(payload.username);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  const jwtPayload = {
    _id: user._id as string,
    role: user.role as string,
    username: user.username as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );
  const data = {
    _id: user._id,
    username: user.username,
    role: user.role,
  };
  return {
    data,
    accessToken,
    refreshToken,
  };
};



const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.jwt_refresh_secret as string);

  const { username } = decoded;

  // checking if the user is exist
  const user = await User.isUserExistsByUserName(username);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }


  const jwtPayload = {
    username: user.username,
    role: user.role as string,
    _id: user._id
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};




export const UserServices = {
  createUserIntoDB,
  userLogin,
  refreshToken,
};
