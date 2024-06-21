import { AuthDto } from "../../types/auth/authDto";
import { EmployeeDto } from "../../types/employee/employeeDto";

export default abstract class IEmployeeRepository {
    abstract getEmployeeByOrganizationId(organizationId: number) : Promise<EmployeeDto[] | undefined>
    abstract validateEmailAndPassword(email: string, password: string) : Promise<AuthDto>
}