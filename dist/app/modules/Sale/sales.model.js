"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const mongoose_1 = require("mongoose");
const saleSchema = new mongoose_1.Schema({
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    buyer: {
        type: String,
        required: true,
    },
    quantity_sold: {
        type: Number,
        required: true,
    },
    soldBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    sale_date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Sale = (0, mongoose_1.model)('Sale', saleSchema);
