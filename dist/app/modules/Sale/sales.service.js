"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const date_fns_1 = require("date-fns");
const sales_model_1 = require("./sales.model");
const createSaleIntoDB = (payload, tokenData) => __awaiter(void 0, void 0, void 0, function* () {
    payload.soldBy = tokenData._id;
    const result = yield sales_model_1.Sale.create(payload);
    return result;
});
const getAllSalesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sales_model_1.Sale.find().populate('soldBy').populate('productId');
    return result;
});
const getSalesHistory = (period) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let startDate;
        let endDate;
        const currentDate = new Date();
        switch (period) {
            case 'weekly':
                startDate = (0, date_fns_1.startOfWeek)(currentDate);
                endDate = currentDate;
                break;
            case 'daily':
                startDate = (0, date_fns_1.startOfDay)(currentDate);
                endDate = (0, date_fns_1.add)(startDate, { days: 1 });
                break;
            case 'monthly':
                startDate = (0, date_fns_1.startOfMonth)(currentDate);
                endDate = currentDate;
                break;
            case 'yearly':
                startDate = (0, date_fns_1.startOfYear)(currentDate);
                endDate = currentDate;
                break;
            default:
                throw new Error('Invalid period');
        }
        const sales = yield sales_model_1.Sale.find({
            sale_date: { $gte: startDate, $lt: endDate },
        })
            .populate('soldBy')
            .populate('productId')
            .sort({ sale_date: 'asc' });
        return sales;
    }
    catch (error) {
        throw new Error(`Failed to retrieve sales for period ${period}`);
    }
});
exports.SaleServices = {
    createSaleIntoDB,
    getAllSalesFromDB,
    getSalesHistory,
};
