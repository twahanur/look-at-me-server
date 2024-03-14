import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SaleValidation } from './sales.validation';
import { saleController } from './sales.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(SaleValidation.createSaleValidationSchema),
  saleController.createSale,
);
router.get('/', saleController.getAllSales);
export const SaleRoutes = router;
