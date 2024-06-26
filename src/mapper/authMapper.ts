import { AuthDto } from "../types/auth/authDto";
import { AuthFromSQLDto } from "../types/auth/authFromSQLDto";


export default class AuthMapper {
  static mappOne(entity: AuthFromSQLDto): AuthDto {
    return {
        status: true,
        body: {
            idEmployee: entity.id_employee,
            employeeCpf: entity.employee_cpf,
            organizationId: entity.organization_id,
            employeeEmail: entity.employee_email,
            employeeName: entity.employee_name,
            employeePhone: entity.employee_phone,
            employeePhoto: entity.employee_photo
        }
    }
  }
}
