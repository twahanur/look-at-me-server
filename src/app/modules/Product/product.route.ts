import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();
router.post(
  '/add-product',
  ProductControllers.addProduct,
);
router.get('/',  ProductControllers.getAllProducts);
router.put('/:_id', ProductControllers.updateProduct);
router.delete('/:_id', ProductControllers.deleteProduct);


export const ProductRoutes = router;
