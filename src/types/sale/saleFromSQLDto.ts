export type SaleFromSQLDto = {
  product_id: number;
  sale_id: number;
  sold_by: number;
  organization_id: number;
  user_id?: number;
  amount: string;
  created_at: Date;
  updated_at: Date;
  sale_type_id: number;
};
