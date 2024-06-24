import { ProductDto } from "../types/product/productDto";
import { ProductFromSQLDto } from "../types/product/productFromSQLDto";

export default class ProductMapper {
  static mappOne(productDto: ProductFromSQLDto): ProductDto {
    return {
      productId: productDto.product_id,
      organizationId: productDto.organization_id,
      productName: productDto.product_name,
      productCode: productDto.product_code,
    };
  }

  static mapGetProducts(query: ProductFromSQLDto[]): ProductDto[] {
    return query.map((productDto) => {
        return {
            productId: productDto.product_id,
            organizationId: productDto.organization_id,
            productName: productDto.product_name,
            productCode: productDto.product_code,
          };
    })
  }
}
