import { productCreateDto } from "../../types/product/productCreateDto";
import { ProductDto } from "../../types/product/productDto";

export default abstract class IProductService {
  abstract getProductById(productId: number): Promise<ProductDto | undefined>;
  abstract getProducts(organizationId: number): Promise<ProductDto[]>;
  abstract createProducts(
    body: productCreateDto
  ): Promise<ProductDto | undefined>;
  abstract editProduct(body: ProductDto): Promise<ProductDto | undefined>;
  abstract deleteProduct(productId: number): Promise<boolean>;
  abstract validatorProduct(productId: number): Promise<ProductDto | undefined>;
  abstract getLastModifyQuantity(productId, saleId) : Promise<number>
}
