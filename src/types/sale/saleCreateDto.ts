export type SaleCreateDto = {
  productId: number;
  organizationId: number;
  saleTypeId: number;
  soldBy: number;
  userId?: number;
  amount: string;
  createdAt: Date;
};
