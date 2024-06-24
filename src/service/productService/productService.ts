import IProductService from "../../interface/service/IProductService";
import ProductRepository from "../../repository/productRepository";
import { productCreateDto } from "../../types/product/productCreateDto";
import { ProductDto } from "../../types/product/productDto";

export default class ProductService implements IProductService {
  private productRepository = new ProductRepository();

  public async getProductById(
    productId: number
  ): Promise<ProductDto | undefined> {
    const product = await this.productRepository.getProductById(productId);

    if (!product) throw new Error("user not found");

    return product;
  }

  public async getProducts(organizationId: number): Promise<ProductDto[]> {
    return await this.productRepository.getProducts(organizationId);
  }

  public async createProducts(
    body: productCreateDto
  ): Promise<ProductDto | undefined> {
    const product = await this.productRepository.getProductByCode(
      body.productCode
    );

    if (product) throw new Error("product with the same code already exist");

    return await this.productRepository.createProducts(body);
  }

  public async editProduct(body: ProductDto): Promise<ProductDto | undefined> {
    await this.getProductById(body.productId);
    return await this.productRepository.editProduct(body);
  }

  public async deleteProduct(productId: number): Promise<boolean> {
    await this.getProductById(productId);
    return await this.productRepository.deleteProduct(productId);
  }
}
