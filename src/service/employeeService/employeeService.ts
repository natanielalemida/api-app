import IEmployeeService from "../../interface/service/IEmployeeService"
import EmployeeRepository from "../../repository/employeeRepository"

export default class EmployeeService implements IEmployeeService {
    private employeeRepository = new EmployeeRepository()
    
  public async getEmployeeByOrganizationId(organizationId: number): Promise<string[] | []> {
    // TODO: verificar se a empresa existe
    return await this.employeeRepository.getEmployeeByOrganizationId(organizationId)
  }
}
