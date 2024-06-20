
export default abstract class IEmployeeRepository {
    abstract getEmployeeByOrganizationId(organizationId: number) : Promise<string[] | undefined>
}