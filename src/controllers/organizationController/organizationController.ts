import IOrganizationController from "../../interface/controllers/IOrganizationController"
import validator from "../../middleware/validator"
import OrganizationService from "../../service/organizationService/organizationService"
import { OrganizationDto } from "../../types/organization/organizationDto"


export default class OrganizationController implements IOrganizationController {

    private organizationService = new OrganizationService()

    public async getOrganizationById(organizationId: number) : Promise<OrganizationDto | undefined> {

        const { verifyOrganizationNumber } = validator()

        verifyOrganizationNumber(organizationId)

        return await this.organizationService.getOrganizationById(organizationId);

    }
}