import { SaleCreateDto } from "../../types/sale/saleCreateDto";
import { SaleDto } from "../../types/sale/saleDto";
import { SaleUpdateDto } from "../../types/sale/saleUpdateDto";

export default abstract class ISaleRepository {
    abstract getSolds(organizationId: number) : Promise<SaleDto[]>
    abstract getSoldById(saleId: number) : Promise<SaleDto | undefined>
    abstract createSale(body: SaleCreateDto) : Promise<SaleDto | undefined>
    abstract updateSold(body: SaleUpdateDto) : Promise<SaleDto | undefined>
    abstract deleteSold(saleId: number) : Promise<boolean>
}

