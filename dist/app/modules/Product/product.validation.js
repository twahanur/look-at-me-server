"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = exports.updateTProductSchema = void 0;
const zod_1 = require("zod");
const TProductSchema = [
    zod_1.z.object({
        name: zod_1.z.string(),
        price: zod_1.z.number(),
        quantity: zod_1.z.number(),
        frame_material: zod_1.z.string(),
        frame_shape: zod_1.z.string(),
        lens_type: zod_1.z.string(),
        brand: zod_1.z.string(),
        gender: zod_1.z.string(),
        color: zod_1.z.string(),
        temple_length: zod_1.z.number(),
        bridge_size: zod_1.z.number(),
    }),
];
exports.updateTProductSchema = TProductSchema[0].partial();
exports.ProductValidations = {
    TProductSchema,
};
