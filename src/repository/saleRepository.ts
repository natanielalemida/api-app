import connection from "../database/connetion";
import ISaleRepository from "../interface/repository/ISaleRepository";
import SaleMapper from "../mapper/saleMapper";
import { ProductDto } from "../types/product/productDto";
import { SaleCreateDto } from "../types/sale/saleCreateDto";
import { SaleDto } from "../types/sale/saleDto";
import { SaleFromSQLDto } from "../types/sale/saleFromSQLDto";
import { SaleUpdateDto } from "../types/sale/saleUpdateDto";

export default class SaleRepository implements ISaleRepository {
  public async getSolds(organizationId: number): Promise<SaleDto[]> {
    const result = await connection("sales")
      .innerJoin("sale_product", "sale_product.sale_id", "sales.sale_id")
      .innerJoin("sale_type", "sale_type.sale_type_id", "sales.sale_type_id")
      .innerJoin("product", "product.product_id", "sale_product.product_id")
      .select<SaleFromSQLDto[]>([
        "sales.sale_id",
        "sales.sold_by",
        "sales.organization_id",
        "sales.user_id",
        "sales.amount",
        "sales.created_at",
        "sales.updated_at",
        "sales.sale_type_id",
        "sale_type.sale_type_name",
        "sale_product.quantity as sale_product_quantity",
        "sale_product.price as sale_product_price",
        "sale_product.price as sale_product_product_id",
        "product.product_name as product_name",
      ])

      .where("sales.organization_id", organizationId)
      .andWhere("sale_product.active", 1)
      .andWhere("sales.active", 1);
    return SaleMapper.mappQuery(result);
  }

  public async getSoldById(saleId: number): Promise<SaleDto | undefined> {
    const result = await connection("sales")
      .innerJoin("sale_product", "sale_product.sale_id", "sales.sale_id")
      .innerJoin("sale_type", "sale_type.sale_type_id", "sales.sale_type_id")
      .innerJoin("product", "product.product_id", "sale_product.product_id")
      .select<SaleFromSQLDto[]>([
        "sales.sale_id",
        "sales.sold_by",
        "sales.organization_id",
        "sales.user_id",
        "sales.amount",
        "sales.created_at",
        "sales.updated_at",
        "sales.sale_type_id",
        "sale_type.sale_type_name",
        "sale_product.quantity as sale_product_quantity",
        "sale_product.price as sale_product_price",
        "sale_product.price as sale_product_product_id",
        "product.product_name as product_name",
      ])
      .where("sales.sale_id", saleId)
      .andWhere("sales.active", 1)
      .andWhere("sale_product.active", 1);

    if (!result) return undefined;

    return SaleMapper.mappOne(result);
  }

  public async createSale(body: SaleCreateDto): Promise<SaleDto | undefined> {
    const transaction = await connection.transaction();

    try {
      const [id] = await connection("sales").insert({
        organization_id: body.organizationId,
        sale_type_id: body.saleTypeId,
        sold_by: body.soldBy,
        user_id: body.userId ? body.userId : 0,
        amount: body.amount,
        created_at: new Date(body.createdAt),
        updated_at: null,
      });

      const result = await this.getSoldById(id);

      if (!result) throw new Error("cannot create sale");

      await this.transactionCreateProduct(transaction, id, body.products);

      transaction.commit();

      return result;
    } catch (err) {
      console.log(err);
      transaction.rollback();
      return;
    }
  }

  public async updateSold(body: SaleUpdateDto): Promise<SaleDto | undefined> {
    const transaction = await connection.transaction();

    try {
      const id = await connection("sales").update({
        organization_id: body.organizationId,
        sold_by: body.soldBy,
        sale_type_id: body.saleTypeId,
        user_id: body.userId ? body.userId : 0,
        amount: body.amount,
        created_at: new Date(body.createdAt),
        updated_at: new Date(),
      });

      if (!id) throw new Error("cannot update sale");

      await this.transactionUpdateProduct(
        transaction,
        body.saleId,
        body.products
      );

      const result = await this.getSoldById(body.saleId);

      transaction.commit();

      return result;
    } catch (err) {
      console.log(err);
      transaction.rollback();
      return;
    }
  }

  public async deleteSold(soldId: number): Promise<boolean> {
    const id = await connection("sales")
      .update({ active: 0 })
      .where("sale_id", soldId);

    if (!id) throw new Error("cannot delete sale");

    return true;
  }

  private async transactionCreateProduct(
    transaction,
    saleId,
    products: ProductDto[]
  ) {
    const productsFormated = products.map((product) => {
      return {
        product_id: product.productId,
        sale_id: saleId,
        quantity: product.productQuantity,
        price: product.productPrice,
        active: 1,
      };
    });

    await transaction("sale_product").insert(productsFormated);
  }

  private async transactionUpdateProduct(
    transaction,
    saleId,
    products: ProductDto[]
  ) {
    Promise.all(
      products.map(async (product) => {
        return await transaction("sale_product")
          .update({
            product_id: product.productId,
            quantity: product.productQuantity,
            price: product.productPrice,
            sale_id: saleId,
          })
          .where("product_id", product.productId)
          .andWhere("sale_id", saleId)
          .andWhere("active", 1);
      })
    );
  }
}
