"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const sales_validation_1 = require("./sales.validation");
const sales_controller_1 = require("./sales.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(user_constant_1.USER_ROLE.user), (0, validateRequest_1.default)(sales_validation_1.SaleValidation.createSaleValidationSchema), sales_controller_1.saleController.createSale);
router.get('/', sales_controller_1.saleController.getAllSales);
exports.SaleRoutes = router;
