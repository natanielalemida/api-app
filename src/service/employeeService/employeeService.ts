import IEmployeeService from "../../interface/service/IEmployeeService"
import EmployeeRepository from "../../repository/employeeRepository"
import { AuthDto } from "../../types/auth/authDto"
import { EmployeeDto } from "../../types/employee/employeeDto"
import OrganizationService from "../organizationService/organizationService"

export default class EmployeeService implements IEmployeeService {
    private employeeRepository = new EmployeeRepository()
    private organizationService = new OrganizationService()
    
  public async getEmployeeByOrganizationId(organizationId: number): Promise<EmployeeDto[] | []> {
    
    await this.organizationService.verifyOrganizationById(organizationId);

    return await this.employeeRepository.getEmployeeByOrganizationId(organizationId)
  }

  public async validateEmailAndPassword(email: string, password: string) : Promise<AuthDto> {
    return await this.employeeRepository.validateEmailAndPassword(email, password)
  }

  public async getById(userId: number) : Promise<EmployeeDto | undefined> {
    const user = await this.employeeRepository.getById(userId)

    if(!user) throw new Error('User not found')

    return user
  }

  public async deleteUser(userId: number) : Promise<boolean> {
    await this.getById(userId)
    return await this.employeeRepository.deleteUser(userId)
  }
}
