import { AuthDto } from "../../types/auth/authDto";
import { EmployeeDto } from "../../types/employee/employeeDto";

export default abstract class IEmployeeService {
    abstract getEmployeeByOrganizationId(organizationId: number) : Promise<EmployeeDto[] | undefined>
    abstract validateEmailAndPassword(email: string, password: string) : Promise<AuthDto>
    abstract getById(userId: number) : Promise<EmployeeDto | undefined>
    abstract deleteUser(userId: number) : Promise<boolean>
}