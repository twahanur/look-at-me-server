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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const product_model_1 = __importDefault(require("./product.model"));
const addProductToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payload);
    return result;
});
const getAllProductsFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sortBy = 'name', sortOrder = 'asc', minPrice, maxPrice, frameMaterial, frameShapeSearch, lensType, brand, gender, color, templeLength, bridgeSize, } = payload;
        const query = {};
        if (sortOrder !== 'asc' && sortOrder !== 'desc') {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "SortOrder must be 'asc' or 'desc'");
        }
        if (minPrice || maxPrice) {
            query.priceRange = {};
            if (minPrice)
                query.priceRange.min = parseFloat(minPrice);
            if (maxPrice)
                query.priceRange.max = parseFloat(maxPrice);
        }
        if (frameMaterial)
            query.frameMaterial = frameMaterial;
        if (frameShapeSearch)
            query.frameShapeSearch = frameShapeSearch;
        if (lensType)
            query.lensType = lensType;
        if (brand)
            query.brand = brand;
        if (gender)
            query.gender = gender;
        if (color)
            query.color = color;
        if (templeLength)
            query.templeLength = templeLength;
        if (bridgeSize)
            query.bridgeSize = bridgeSize;
        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
        const products = yield product_model_1.default.find(query).sort(sortOptions);
        return products;
    }
    catch (error) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to retrieve products');
    }
});
const updateProductInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const validProduct = yield product_model_1.default.findById(id);
    if (validProduct) {
        const result = yield product_model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        });
        return result;
    }
    else {
        throw new AppError_1.default(404, 'Invalid id | Product is not found');
    }
});
const deleteProductFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.default.findByIdAndDelete(_id);
        return result;
    }
    catch (error) {
        throw new AppError_1.default(404, 'Invalid id | Product is not found');
    }
});
exports.ProductServices = {
    addProductToDB,
    getAllProductsFromDB,
    updateProductInDB,
    deleteProductFromDB,
};
