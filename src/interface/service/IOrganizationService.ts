import { OrganizationDto } from "../../types/organization/organizationDto";

export default abstract class IOrganizationService {
    abstract getOrganizationById(organizationId: number) : Promise<OrganizationDto | undefined>
}