"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.default)(user_validation_1.UserValidation.userValidationSchema), user_controller_1.UserControllers.createUser);
router.post('/login', (0, validateRequest_1.default)(user_validation_1.UserValidation.loginValidationSchema), user_controller_1.UserControllers.userLogin);
router.post('/refresh-token', (0, validateRequest_1.default)(user_validation_1.UserValidation.refreshTokenValidationSchema), user_controller_1.UserControllers.refreshToken);
exports.UserRoutes = router;
