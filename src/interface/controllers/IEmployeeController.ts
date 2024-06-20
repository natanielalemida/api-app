import { EmployeeDto } from "../../types/employee/employeeDto";

export default abstract class IEmployeeController {
    abstract getEmployeeByOrganizationId(params) : Promise<EmployeeDto[] | []>
    abstract validateEmailAndPassword(req) : Promise<boolean>
}