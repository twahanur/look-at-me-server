/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import {
  TProduct,
  TProductFilterPayload,
  TProductQuery,
} from './product.interface';
import Product from './product.model';

const addProductToDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductsFromDB = async (payload: TProductFilterPayload) => {
  try {
    const {
      sortBy = 'name',
      sortOrder = 'asc',
      minPrice,
      maxPrice,
      frameMaterial,
      frameShapeSearch,
      lensType,
      brand,
      gender,
      color,
      templeLength,
      bridgeSize,
    } = payload;
    const query: any = {};
    if (sortOrder !== 'asc' && sortOrder !== 'desc') {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        "SortOrder must be 'asc' or 'desc'",
      );
    }
    if (minPrice || maxPrice) {
      query.priceRange = {};
      if (minPrice) query.priceRange.min = parseFloat(minPrice as string);
      if (maxPrice) query.priceRange.max = parseFloat(maxPrice as string);
    }
    if (frameMaterial) query.frameMaterial = frameMaterial;
    if (frameShapeSearch) query.frameShapeSearch = frameShapeSearch;
    if (lensType) query.lensType = lensType;
    if (brand) query.brand = brand;
    if (gender) query.gender = gender;
    if (color) query.color = color;
    if (templeLength) query.templeLength = templeLength;
    if (bridgeSize) query.bridgeSize = bridgeSize;
    const sortOptions: Record<string, any> = {};
    sortOptions[sortBy as string] = sortOrder === 'asc' ? 1 : -1;
    const products = await Product.find(query).sort(sortOptions);
    return products;
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to retrieve products');
  }
};

const updateProductInDB = async (id: string, payload: Partial<TProduct>) => {
  const validProduct = await Product.findById(id);

  if (validProduct) {
    const result = await Product.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    return result;
  } else {
    throw new AppError(404, 'Invalid id | Product is not found');
  }
};

const deleteProductFromDB = async (_id: any) => {
  try {
    const result = await Product.findByIdAndDelete(_id);
    return result;
  } catch (error) {
    throw new AppError(404, 'Invalid id | Product is not found');
  }
};

export const ProductServices = {
  addProductToDB,
  getAllProductsFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
