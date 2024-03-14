"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
// import { UserStatus } from './user.constant';
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    username: zod_1.z.string({ required_error: 'Username is required.' }),
    password: zod_1.z
        .string({
        invalid_type_error: 'Password must be a string',
    })
        .refine((data) => !!data, { message: 'Password is required' }),
    role: zod_1.z
        .string({
        invalid_type_error: 'Role must be a string',
    })
        .optional(),
});
const loginValidationSchema = zod_1.z.object({
    username: zod_1.z.string({ required_error: 'Username is required.' }),
    password: zod_1.z.string({ required_error: 'Password is required' }),
});
const refreshTokenValidationSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: 'Refresh token is required!',
        }),
    }),
});
exports.UserValidation = {
    userValidationSchema,
    loginValidationSchema,
    refreshTokenValidationSchema,
};
