
export type TProduct= [{
  name: string;
  price: number;
  quantity: number;
  frame_material: string;
  frame_shape: string;
  lens_type: string;
  brand: string;
  gender: string;
  color: string;
  temple_length: number;
  bridge_size: number;
}]
export type TProductFilterPayload = {
  frameMaterial?: string;
  frameShapeSearch?: string;
  lensType?: string;
  brand?: string;
  priceRange?: { min: number; max: number };
  gender?: string;
  color?: string;
  templeLength?: number;
  bridgeSize?: number;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  minPrice?: string;
  maxPrice?: string;
};


export type TProductQuery = {
  frameMaterial?: string;
  frameShapeSearch?: string;
  lensType?: string;
  brand?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  gender?: string;
  color?: string;
  templeLength?: number;
  bridgeSize?: number;
};

