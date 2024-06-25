export type SaleCreateDto = {
  productId: number;
  organizationId: number,
  soldBy: number;
  userId?: number;
  amount: string;
  createdAt: Date;
};
