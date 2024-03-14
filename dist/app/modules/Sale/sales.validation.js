"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleValidation = void 0;
const zod_1 = require("zod");
const createSaleValidationSchema = zod_1.z.object({
    productId: zod_1.z.string({
        invalid_type_error: 'Product ID must be a string',
        required_error: 'Product ID is required',
    }),
    buyer: zod_1.z.string({
        invalid_type_error: 'Buyer must be a string',
        required_error: 'Buyer is required',
    }),
    quantity_sold: zod_1.z
        .number({
        invalid_type_error: 'Quantity sold must be a number',
        required_error: 'Quantity sold is required',
    })
        .int()
        .min(1, 'Quantity sold must be at least 1'),
    sale_date: zod_1.z.string({
        invalid_type_error: 'Sale date must be a date',
        required_error: 'Sale date is required',
    }),
});
exports.SaleValidation = {
    createSaleValidationSchema,
};
