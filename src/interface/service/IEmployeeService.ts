import { EmployeeDto } from "../../types/employee/employeeDto";

export default abstract class IEmployeeService {
    abstract getEmployeeByOrganizationId(organizationId: number) : Promise<EmployeeDto[] | undefined>
    abstract validateEmailAndPassword(email: string, password: string) : Promise<boolean>
}