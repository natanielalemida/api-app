
import IEmployeeController from "../../interface/controllers/IEmployeeController";
import validator from "../../middleware/validator";
import EmployeeService from "../../service/employeeService/employeeService";
import { AuthDto } from "../../types/auth/authDto";
import { EmployeeDto } from "../../types/employee/employeeDto";
import { statusDto } from "../../types/statusDto";

export default class EmployeeController implements IEmployeeController {
  private employeeService = new EmployeeService();

  public async getEmployeeByOrganizationId(req): Promise<EmployeeDto[] | []> {
    
    const { verifyOrganizationNumber } = validator();

    const { organizationId } = req.params;

    verifyOrganizationNumber(organizationId);

    return await this.employeeService.getEmployeeByOrganizationId(organizationId);
  }

  public async validateEmailAndPassword(req) : Promise<AuthDto> {

    const { email, password} = req.body;

    const { verifyString } = validator();

    verifyString(email)
    verifyString(password)

    return await this.employeeService.validateEmailAndPassword(email, password)
  }

  public async deleteUser(req) : Promise<statusDto> {

    const { userId } = req.params;

    const { verifyOrganizationNumber } = validator();

    verifyOrganizationNumber(userId)

    const user = await this.employeeService.deleteUser(userId)

    if(!user) {
      return {
        status: 500,
        message: "cannot delet user"
      }
    }

    return {
      status: 200,
      message: "user deleted"
    }

  }

}
