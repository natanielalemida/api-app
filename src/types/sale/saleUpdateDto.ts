export type SaleUpdateDto = {
  saleId: number;
  productId: number;
  organizationId: number;
  soldBy: number;
  userId?: number;
  amount: string;
  createdAt: Date;
  updateAt: Date;
};