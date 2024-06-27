import connection from "../database/connetion";
import IProductRepository from "../interface/repository/IProductRepository";
import ProductMapper from "../mapper/productMapper";
import { productCreateDto } from "../types/product/productCreateDto";
import { ProductDto } from "../types/product/productDto";
import { ProductFromSQLDto } from "../types/product/productFromSQLDto";

export default class ProductRepository implements IProductRepository {
  public async getProductById(
    productId: number
  ): Promise<ProductDto | undefined> {
    const data = await connection("product")
      .select<ProductFromSQLDto>("*")
      .where("product_id", productId)
      .andWhere("active", 1)
      .first();

    if (!data) return undefined;

    return ProductMapper.mappOne(data);
  }

  public async getLastModifyQuantity(
    productId: number,
    saleId: number
  ): Promise<number> {
    return await connection("sale_product")
      .select<number>("quantity")
      .where("product_id", productId)
      .andWhere("sale_id", saleId)
      .andWhere("active", 1)
      .first();
  }

  public async getProductByCode(code: string): Promise<ProductDto | undefined> {
    const data = await connection("product")
      .select<ProductFromSQLDto>("*")
      .where("product_code", code)
      .andWhere("active", 1)
      .first();

    if (!data) return undefined;

    return ProductMapper.mappOne(data);
  }

  public async getProducts(organizationId: number): Promise<ProductDto[]> {
    const data = await connection("product")
      .select<ProductFromSQLDto[]>("*")
      .where("organization_id", organizationId)
      .andWhere("active", 1);

    if (!data) return [] as ProductDto[];

    return ProductMapper.mapGetProducts(data);
  }

  public async createProducts(
    body: productCreateDto
  ): Promise<ProductDto | undefined> {
    const [productId] = await connection("product").insert({
      organization_id: body.organizationId,
      product_name: body.productName,
      product_code: body.productCode,
      product_quantity: body.productQuantity,
      price: body.productPrice,
    });

    const product = await this.getProductById(productId);

    if (!product) throw new Error("Unable to create product, try again");

    return product;
  }

  public async editProduct(body: ProductDto): Promise<ProductDto | undefined> {
    const productId = await connection("product")
      .update({
        organization_id: body.organizationId,
        product_name: body.productName,
        product_code: body.productCode,
        product_quantity: body.productQuantity,
        price: body.productPrice,
      })
      .where("product_id", body.productId)
      .andWhere("active", 1);

    if (!productId) throw new Error("Unable to update product, try again");

    return await this.getProductById(body.productId);
  }

  public async deleteProduct(productId: number): Promise<boolean> {
    const id = await connection("product")
      .update({ active: 0 })
      .where("product_id", productId);

    const product = await this.getProductById(id);

    if (product) false;

    return true;
  }
}
