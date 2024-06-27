import { SaleDto } from "../types/sale/saleDto";
import { SaleFromSQLDto } from "../types/sale/saleFromSQLDto";

export default class SaleMapper {
  static mappQuery(body: SaleFromSQLDto[]): SaleDto[] {
    const salesMap = body.reduce((acc, curr) => {
      if (!acc[curr.sale_id]) {
        acc[curr.sale_id] = {
          saleId: curr.sale_id,
          soldBy: curr.sold_by,
          organizationId: curr.organization_id,
          userId: curr.user_id,
          amount: curr.amount,
          createdAt: curr.created_at,
          updatedAt: curr.updated_at,
          saleTypeId: curr.sale_type_id,
          saleTypeName: curr.sale_type_name,
          products: []
        };
      }
  
      acc[curr.sale_id].products.push({
        productId: curr.sale_product_product_id,
        productName: curr.product_name,
        productPrice: curr.sale_product_price,
        productQuantity: curr.sale_product_quantity
      });
  
      return acc;
    }, {});
  
    return Object.values(salesMap);
  }
  

  static mappOne(body: SaleFromSQLDto[]): SaleDto {
    return body.reduce((acc, curr) => {
      if (!acc.saleId) {
        acc = {
          saleId: curr.sale_id,
          soldBy: curr.sold_by,
          organizationId: curr.organization_id,
          userId: curr.user_id,
          amount: curr.amount,
          createdAt: curr.created_at,
          saleTypeId: curr.sale_type_id,
          saleTypeName: curr.sale_type_name,
          products: [],
        };
      }

      acc.products.push({
        productId: curr.sale_product_product_id,
        productName: curr.product_name,
        productPrice: curr.sale_product_price,
        productQuantity: curr.sale_product_quantity,
      });

      return acc;
    }, {} as SaleDto);
  }
}
