import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const addProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.addProductToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED || 201,
    message: 'Product is created successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products are retrieved successfully',
    data: { result },
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.updateProductInDB(
    req.body._id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  await ProductServices.deleteProductFromDB(req.params);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is Deleted successfully',
    data: "",
  });
});

export const ProductControllers = {
  updateProduct,
  getAllProducts,
  addProduct,
  deleteProduct,
};
