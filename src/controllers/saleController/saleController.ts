import ISaleController from "../../interface/controllers/ISaleController";
import validator from "../../middleware/validator";
import SaleService from "../../service/saleService/saleSerivce";
import { SaleDto } from "../../types/sale/saleDto";
import { SaleStatusDto } from "../../types/sale/saleStatusDto";
import { statusDto } from "../../types/statusDto";

export default class SaleController implements ISaleController {
    private saleService = new SaleService()

    public async getSolds(req) : Promise<SaleDto[]> {

        const { organizationId } = req.params;

        const { verifyOrganizationNumber } = validator()

        verifyOrganizationNumber(organizationId)

        return await this.saleService.getSolds(organizationId)
    }

    public async getSoldById(req) : Promise<SaleStatusDto> {

        const { saleId } = req.params;

        const { verifyOrganizationNumber } = validator()

        verifyOrganizationNumber(saleId)

       const result = await this.saleService.getSoldById(saleId)

       if(!result) return {status: 200, message: 'sale not found'}

       return {status: 400, message: 'user found', body: result}

    }

    public async createSale(req) : Promise<SaleStatusDto> {

        const { body } = req;
  
        const { verifySaleBody } = validator()
  
        verifySaleBody(body)
  
        const sale = await this.saleService.createSale(body)
  
        if(!sale) return {status: 200, message: "cannot create sale"}
  
        return { status: 200, message: "sale created", body: sale}
  
     }

     public async updateSold(req) : Promise<SaleStatusDto> {

        const { body } = req;
  
        const { verifySaleBodyUpdate } = validator()
  
        verifySaleBodyUpdate(body)
  
        const sale = await this.saleService.updateSold(body)
  
        if(!sale) return {status: 200, message: "cannot cedit sale"}
  
        return { status: 200, message: "sale edited", body: sale}
  
     }

     public async deleteSold(req) : Promise<statusDto> {

        const { saleId } = req.params;

        const { verifyOrganizationNumber } = validator()

        verifyOrganizationNumber(saleId)

       const result = await this.saleService.deleteSold(saleId)

       if(!result) return {status: 200, message: 'cannot delet sale'}

       return {status: 400, message: 'sale deleted'}

    }
}