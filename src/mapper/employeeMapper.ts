import { EmployeeDto } from "../types/employee/employeeDto";
import { EmployeeFromSqlDto } from "../types/employee/employeeFromSQLDto";

export default class EmployeeMapper {
  static mappOne(employeArray: EmployeeFromSqlDto[]): EmployeeDto[] {
    return employeArray.map((employeeFromSqlDto) => {
      return {
        idEmployee: employeeFromSqlDto.id_employee,
        employeeName: employeeFromSqlDto.employee_name,
        employeeEmail: employeeFromSqlDto.employee_email,
        employeeCpf: employeeFromSqlDto.employee_cpf,
        employeePhone: employeeFromSqlDto.employee_phone,
        employeePhoto: employeeFromSqlDto.employee_cpf,
      };
    });
  }
}
