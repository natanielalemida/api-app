import { OrganizationDto } from "../types/organization/organizationDto";
import { organizationFromSQLDto } from "../types/organization/organizationFromSQLDto";

export default class OrganizationMapper {
 static mappOne(organizationDto: organizationFromSQLDto) : OrganizationDto {
    return {
        idOrganization: organizationDto.id_organization,
        organizationName: organizationDto.organization_name,
        active: organizationDto.active
    }
 }
}