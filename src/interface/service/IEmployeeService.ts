export default abstract class IEmployeeService {
    abstract getEmployeeByOrganizationId(organizationId: number) : Promise<string[] | undefined>
}