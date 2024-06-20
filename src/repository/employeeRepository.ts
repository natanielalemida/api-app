import connection from "../database/connetion";
import IEmployeeRepository from "../interface/repository/IEmployeeRepository";
import EmployeeMapper from "../mapper/employeeMapper";
import { EmployeeDto } from "../types/employee/employeeDto";
import { EmployeeFromSqlDto } from "../types/employee/employeeFromSQLDto";

export default class EmployeeRepository implements IEmployeeRepository {
  public async getEmployeeByOrganizationId(
    organizationId: number
  ): Promise<EmployeeDto[] | undefined> {
    const employees = await connection("employee")
      .select<EmployeeFromSqlDto[]>(
        "id_employee",
        "employee_name",
        "employee_email",
        "employee_cpf",
        "employee_phone",
        "employee_photo"
      )
      .where("organization_id", organizationId)
      .andWhere("active", 1);

    if (!employees.length) return undefined;

    return EmployeeMapper.mappOne(employees);
  }

  public async validateEmailAndPassword(email: string, password: string) : Promise<boolean> {
    const result = await connection("employee").select('*').where('employee_email', email).andWhere('password', password).andWhere('active', 1).first()

    if(!result) return false

    return true
  };
}
