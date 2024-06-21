import { AuthDto } from "../../types/auth/authDto";
import { EmployeeDto } from "../../types/employee/employeeDto";

export default abstract class IEmployeeController {
    abstract getEmployeeByOrganizationId(params) : Promise<EmployeeDto[] | []>
    abstract validateEmailAndPassword(req) : Promise<AuthDto>
}