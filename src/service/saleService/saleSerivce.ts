import ISaleService from "../../interface/service/ISaleService";
import SaleRepository from "../../repository/saleRepository";
import { SaleCreateDto } from "../../types/sale/saleCreateDto";
import { SaleDto } from "../../types/sale/saleDto";
import { SaleUpdateDto } from "../../types/sale/saleUpdateDto";
import OrganizationService from "../organizationService/organizationService";

export default class SaleService implements ISaleService {
  private saleRepository = new SaleRepository();
  private organizationService = new OrganizationService();

  public async getSolds(organizationId: number): Promise<SaleDto[]> {
    await this.organizationService.verifyOrganizationById(organizationId);
    return await this.saleRepository.getSolds(organizationId);
  }

  public async getSoldById(saleId: number): Promise<SaleDto | undefined> {
    const sold = await this.saleRepository.getSoldById(saleId);

    if (!sold) throw new Error("cannot find user");

    return sold;
  }

  public async createSale(body: SaleCreateDto): Promise<SaleDto | undefined> {
    const sale = await this.saleRepository.createSale(body);

    if (!sale) throw new Error("cannot create user");

    return sale;
  }

  public async updateSold(body: SaleUpdateDto): Promise<SaleDto> {
    const sale = await this.saleRepository.updateSold(body);

    if (!sale) throw new Error("cannot update user");

    return sale;
  }

  public async deleteSold(saleId: number): Promise<boolean> {
    return await this.saleRepository.deleteSold(saleId);
  }
}
