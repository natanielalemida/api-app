import { statusDto } from "../../types/userTypes/statusDto";

export default abstract class IEmployeeController {
    abstract getEmployeeByOrganizationId(params) : Promise<string[] | []>
}