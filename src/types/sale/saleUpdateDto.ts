import { ProductDto } from "../product/productDto";

export type SaleUpdateDto = {
  saleId: number;
  products: ProductDto[];
  organizationId: number;
  saleTypeId: number;
  soldBy: number;
  userId?: number;
  amount: string;
  createdAt: Date;
  updateAt: Date;
};
