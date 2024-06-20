"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeMapper {
    static mappOne(employeArray) {
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
exports.default = EmployeeMapper;
//# sourceMappingURL=employeeMapper.js.map