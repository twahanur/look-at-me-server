import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SaleServices } from './sales.service';

const createSale = catchAsync(async (req, res) => {
  const result = await SaleServices.createSaleIntoDB(req.body, req.user); 

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Sale is created successfully',
    data: result,
  });
});

const getAllSales = catchAsync(async (req, res) => {
  if (req.query.period) {
    const { period } = req.query;
    const time = period;
    const result = await SaleServices.getSalesHistory(period as string);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Sales for period '${time}' are retrieved successfully`,
      data: result,
    });
  } else {
  const result = await SaleServices.getAllSalesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Sales are retrieved successfully `,
    data: result,
  });
  }
});

export const saleController = {
  createSale, 
  getAllSales,
};
