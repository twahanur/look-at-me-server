import { z } from 'zod';

const createSaleValidationSchema = z.object({
  productId: z.string({
    invalid_type_error: 'Product ID must be a string',
    required_error: 'Product ID is required',
  }),
  buyer: z.string({
    invalid_type_error: 'Buyer must be a string',
    required_error: 'Buyer is required',
  }),
  quantity_sold: z
    .number({
      invalid_type_error: 'Quantity sold must be a number',
      required_error: 'Quantity sold is required',
    })
    .int()
    .min(1, 'Quantity sold must be at least 1'),
  sale_date: z.string({
    invalid_type_error: 'Sale date must be a date',
    required_error: 'Sale date is required',
  }),
});

export const SaleValidation = {
  createSaleValidationSchema,
};
