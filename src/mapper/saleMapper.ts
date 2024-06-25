import { SaleDto } from "../types/sale/saleDto";
import { SaleFromSQLDto } from "../types/sale/saleFromSQLDto";

export default class SaleMapper {
  static mappQuery(body: SaleFromSQLDto[]): SaleDto[] {
    return body.map((currentSale) => {
      return {
        saleId: currentSale.sale_id,
        productId: currentSale.product_id,
        organizationId: currentSale.organization_id,
        saleTypeId: currentSale.sale_type_id,
        soldBy: currentSale.sold_by,
        userId: currentSale.user_id,
        amount: currentSale.amount,
        createdAt: currentSale.created_at,
      };
    });
  }

  static mappOne(body: SaleFromSQLDto): SaleDto {
    return {
      saleId: body.sale_id,
      productId: body.product_id,
      organizationId: body.organization_id,
      saleTypeId: body.sale_type_id,
      soldBy: body.sold_by,
      userId: body.user_id,
      amount: body.amount,
      createdAt: body.created_at,
    };
  }
}
