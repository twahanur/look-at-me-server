import { z } from 'zod';

const TProductSchema = [
  z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    frame_material: z.string(),
    frame_shape: z.string(),
    lens_type: z.string(),
    brand: z.string(),
    gender: z.string(),
    color: z.string(),
    temple_length: z.number(),
    bridge_size: z.number(),
  }),
];

export const updateTProductSchema = TProductSchema[0].partial();
export const ProductValidations = {
  TProductSchema,
};
