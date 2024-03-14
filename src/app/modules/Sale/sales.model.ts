import { Schema, model } from 'mongoose';
import { TSale } from './sales.interface';

const saleSchema = new Schema<TSale>(
  {
    productId: {
      type: Schema.Types.ObjectId,
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
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    sale_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Sale = model<TSale>('Sale', saleSchema);
