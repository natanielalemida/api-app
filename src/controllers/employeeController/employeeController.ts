
import IEmployeeController from "../../interface/controllers/IEmployeeController";
import validator from "../../middleware/validator";
import EmployeeService from "../../service/employeeService/employeeService";

export default class EmployeeController implements IEmployeeController {
  private employeeService = new EmployeeService();

  public async getEmployeeByOrganizationId(req): Promise<string[] | []> {
    
    const { verifyOrganizationNumber } = validator();

    const { organizationId } = req.params;

    verifyOrganizationNumber(organizationId);

    return await this.employeeService.getEmployeeByOrganizationId(organizationId);
  }

}
