
import IEmployeeController from "../../interface/controllers/IEmployeeController";
import validator from "../../middleware/validator";
import EmployeeService from "../../service/employeeService/employeeService";
import { EmployeeDto } from "../../types/employee/employeeDto";

export default class EmployeeController implements IEmployeeController {
  private employeeService = new EmployeeService();

  public async getEmployeeByOrganizationId(req): Promise<EmployeeDto[] | []> {
    
    const { verifyOrganizationNumber } = validator();

    const { organizationId } = req.params;

    verifyOrganizationNumber(organizationId);

    return await this.employeeService.getEmployeeByOrganizationId(organizationId);
  }

  public async validateEmailAndPassword(req) : Promise<boolean> {

    console.log(req.body)

    const { email, password} = req.body;

    const { verifyString } = validator();

    verifyString(email)
    verifyString(password)

    return await this.employeeService.validateEmailAndPassword(email, password)
  }

}
