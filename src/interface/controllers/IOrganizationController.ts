import { OrganizationDto } from "../../types/organization/organizationDto";

export default abstract class IOrganizationController {
    abstract getOrganizationById(organizationId: number) : Promise<OrganizationDto | undefined>
}