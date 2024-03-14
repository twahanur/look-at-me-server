"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/add-product', product_controller_1.ProductControllers.addProduct);
router.get('/', product_controller_1.ProductControllers.getAllProducts);
router.put('/:_id', product_controller_1.ProductControllers.updateProduct);
router.delete('/:_id', product_controller_1.ProductControllers.deleteProduct);
exports.ProductRoutes = router;
