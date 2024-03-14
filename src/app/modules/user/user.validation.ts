// import { UserStatus } from './user.constant';
import { z } from 'zod';
const userValidationSchema = z.object({
  username: z.string({ required_error: 'Username is required.' }),
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .refine((data) => !!data, { message: 'Password is required' }),
  role: z
    .string({
      invalid_type_error: 'Role must be a string',
    })
    .optional(),
});

const loginValidationSchema = z.object({
  username: z.string({ required_error: 'Username is required.' }),
  password: z.string({ required_error: 'Password is required' }),
});
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});


export const UserValidation = {
  userValidationSchema,
  loginValidationSchema,
  refreshTokenValidationSchema,
};
