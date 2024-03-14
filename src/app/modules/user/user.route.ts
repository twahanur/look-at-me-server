/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);

router.post(
  '/login',
  validateRequest(UserValidation.loginValidationSchema),
  UserControllers.userLogin,
);

router.post(
  '/refresh-token',
  validateRequest(UserValidation.refreshTokenValidationSchema),
  UserControllers.refreshToken,
);



export const UserRoutes = router;
