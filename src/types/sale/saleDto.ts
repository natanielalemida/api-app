type productSearch = {
  productId: number;
  productName: string;
  productPrice: number;
  productQuantity: number;
};

export type SaleDto = {
  saleId: number;
  organizationId: number;
  saleTypeId: number;
  soldBy: number;
  userId?: number;
  amount: string;
  createdAt: Date;
  saleTypeName: string;
  products: productSearch[];
};
