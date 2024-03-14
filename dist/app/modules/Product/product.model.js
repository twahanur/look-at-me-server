"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema([
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        frame_material: {
            type: String,
            required: true,
        },
        frame_shape: {
            type: String,
            required: true,
        },
        lens_type: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        temple_length: {
            type: Number,
            required: true,
        },
        bridge_size: {
            type: Number,
            required: true,
        },
    }
], {
    timestamps: true,
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
