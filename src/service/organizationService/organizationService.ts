import IOrganizationController from "../../interface/controllers/IOrganizationController"
import OrganizationRepository from "../../repository/organizationRepository"
import { OrganizationDto } from "../../types/organization/organizationDto"

export default class OrganizationService implements IOrganizationController {

    private organizationRepository = new OrganizationRepository()

    public async getOrganizationById(organizationId: number) : Promise<OrganizationDto | undefined> {
        return await this.organizationRepository.getOrganizationById(organizationId)
    }

    public async verifyOrganizationById(organizationId: number) : Promise<boolean> {
        const data = await this.getOrganizationById(organizationId);

        if(!data) throw new Error('Organization does not exist in the database')

        return true
    }

}