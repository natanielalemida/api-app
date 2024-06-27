import { ProductDto } from "../product/productDto";

export type SaleCreateDto = {
  products: ProductDto[];
  organizationId: number;
  saleTypeId: number;
  soldBy: number;
  userId?: number;
  amount: string;
  createdAt: Date;
};
