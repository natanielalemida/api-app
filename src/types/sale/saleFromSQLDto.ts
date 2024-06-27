export type SaleFromSQLDto = {
  sale_id: number;
  sold_by: number;
  organization_id: number;
  user_id?: number;
  amount: string;
  created_at: Date;
  updated_at: Date;
  sale_type_id: number;
  sale_type_name: string;
  product_name: string;
  sale_product_product_id: number;
  sale_product_quantity: number;
  sale_product_price: number;
};
