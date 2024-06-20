import { OrganizationDto } from "../../types/organization/organizationDto";

export default abstract class IOrganizationRepository {
    abstract getOrganizationById(organizationId: number) : Promise<OrganizationDto | undefined>
}