import { SaleDto } from "../../types/sale/saleDto";
import { SaleStatusDto } from "../../types/sale/saleStatusDto";
import { statusDto } from "../../types/statusDto";

export default abstract class ISaleController {
    abstract getSolds(req) : Promise<SaleDto[]>
    abstract getSoldById(req) : Promise<SaleStatusDto>
    abstract createSale(req) : Promise<SaleStatusDto>
    abstract updateSold(req) : Promise<SaleStatusDto>
    abstract deleteSold(req) : Promise<statusDto>
}

