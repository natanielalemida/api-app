import connection from "../database/connetion";
import IEmployeeRepository from "../interface/repository/IEmployeeRepository";

export default class EmployeeRepository implements IEmployeeRepository {
    public async getEmployeeByOrganizationId(organizationId: number): Promise<string[] | undefined> {
      const employees = await connection('employee').select('*').where('organization_id', organizationId);
  
      if(!employees.length) return undefined
  
      return employees
    }
}