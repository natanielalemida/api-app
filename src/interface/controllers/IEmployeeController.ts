import { AuthDto } from "../../types/auth/authDto";
import { EmployeeDto } from "../../types/employee/employeeDto";
import { statusDto } from "../../types/statusDto";

export default abstract class IEmployeeController {
    abstract getEmployeeByOrganizationId(params) : Promise<EmployeeDto[] | []>
    abstract validateEmailAndPassword(req) : Promise<AuthDto>
    abstract deleteUser(params) : Promise<statusDto>
}