import IOrganizationController from "../../interface/controllers/IOrganizationController"
import OrganizationRepository from "../../repository/organizationRepository"
import { OrganizationDto } from "../../types/organization/organizationDto"

export default class OrganizationService implements IOrganizationController {
    private organizationRepository = new OrganizationRepository()
    public async getOrganizationById(organizationId: number) : Promise<OrganizationDto | undefined> {
        return await this.organizationRepository.getOrganizationById(organizationId)
    }
}