import connection from "../database/connetion";
import IOrganizationRepository from "../interface/repository/IOrganizationRepository";
import OrganizationMapper from "../mapper/organizationMapper";
import { OrganizationDto } from "../types/organization/organizationDto";
import { organizationFromSQLDto } from "../types/organization/organizationFromSQLDto";

export default class OrganizationRepository implements IOrganizationRepository {
    public async getOrganizationById(organizationId: number) : Promise<OrganizationDto | undefined> {
        const data = await connection.select<organizationFromSQLDto>('*').where('idOrganization', organizationId).first()

        if(!data) return undefined

        return OrganizationMapper.mappOne(data)

    }
}