
export type TSale = {
  saleId: string;
  productId?: string;
  buyer: string;
  quantity_sold: number;
  soldBy?: string;
  sale_date: Date;
};
