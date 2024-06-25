import connection from "../database/connetion";
import ISaleRepository from "../interface/repository/ISaleRepository";
import SaleMapper from "../mapper/saleMapper";
import { SaleCreateDto } from "../types/sale/saleCreateDto";
import { SaleDto } from "../types/sale/saleDto";
import { SaleFromSQLDto } from "../types/sale/saleFromSQLDto";
import { SaleUpdateDto } from "../types/sale/saleUpdateDto";

export default class SaleRepository implements ISaleRepository {
  public async getSolds(organizationId: number): Promise<SaleDto[]> {
    const result = await connection("sales")
      .select<SaleFromSQLDto[]>("*")
      .where("organization_id", organizationId)
      .andWhere("active", 1);
    return SaleMapper.mappQuery(result);
  }

  public async getSoldById(saleId: number): Promise<SaleDto | undefined> {
    const result = await connection("sales")
      .select<SaleFromSQLDto>("*")
      .where("sale_id", saleId)
      .first()

    if (!result) return undefined;

    return SaleMapper.mappOne(result);
  }
  public async createSale(body: SaleCreateDto): Promise<SaleDto | undefined> {
    const [id] = await connection("sales").insert({
      product_id: body.productId,
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

    return result;
  }

  public async updateSold(body: SaleUpdateDto): Promise<SaleDto | undefined> {
    const id = await connection("sales")
      .update({
        product_id: body.productId,
        organization_id: body.organizationId,
        sold_by: body.soldBy,
        sale_type_id: body.saleTypeId,
        user_id: body.userId ? body.userId : 0,
        amount: body.amount,
        created_at: new Date(body.createdAt),
        updated_at: new Date(),
      })
      .where("sale_id", body.saleId);

    if (!id) throw new Error("cannot edit sale");

    return await this.getSoldById(body.saleId);
  }

  public async deleteSold(soldId: number): Promise<boolean> {
    const id = await connection("sales")
      .update({ active: 0 })
      .where("sale_id", soldId);

    if (!id) throw new Error("cannot delete sale");

    return true;
  }
}
