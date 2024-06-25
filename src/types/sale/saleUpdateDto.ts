export type SaleUpdateDto = {
  saleId: number;
  productId: number;
  organizationId: number;
  saleTypeId: number;
  soldBy: number;
  userId?: number;
  amount: string;
  createdAt: Date;
  updateAt: Date;
};
