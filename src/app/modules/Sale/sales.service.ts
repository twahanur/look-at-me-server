/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  startOfWeek,
  startOfMonth,
  startOfYear,
  startOfDay,
  add,
} from 'date-fns';
import { TSale } from './sales.interface';
import { Sale } from './sales.model';

const createSaleIntoDB = async (
  payload: TSale,
  tokenData: any,
): Promise<any> => {
  payload.soldBy = tokenData._id;
  const result = await Sale.create(payload);
  return result;
};

const getAllSalesFromDB = async (): Promise<TSale[]> => {
  const result = await Sale.find().populate('soldBy').populate('productId');
  return result;
};

const getSalesHistory = async (period: string): Promise<TSale[]> => {
  try {
    let startDate;
    let endDate;

    const currentDate = new Date();

    switch (period) {
      case 'weekly':
        startDate = startOfWeek(currentDate);
        endDate = currentDate;
        break;
      case 'daily':
        startDate = startOfDay(currentDate);
        endDate = add(startDate, { days: 1 });
        break;
      case 'monthly':
        startDate = startOfMonth(currentDate);
        endDate = currentDate;
        break;
      case 'yearly':
        startDate = startOfYear(currentDate);
        endDate = currentDate;
        break;
      default:
        throw new Error('Invalid period');
    }
    const sales = await Sale.find({
      sale_date: { $gte: startDate, $lt: endDate },
    })
      .populate('soldBy')
      .populate('productId')
      .sort({ sale_date: 'asc' });
    return sales;
  } catch (error) {
    throw new Error(`Failed to retrieve sales for period ${period}`);
  }
};
export const SaleServices = {
  createSaleIntoDB,
  getAllSalesFromDB,
  getSalesHistory,
};
