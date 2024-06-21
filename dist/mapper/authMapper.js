"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthMapper {
    static mappOne(entity) {
        return {
            status: true,
            body: {
                idEmployee: entity.id_employee,
                employeeCpf: entity.employee_cpf,
                employeeEmail: entity.employee_email,
                employeeName: entity.employee_name,
                employeePhone: entity.employee_phone,
                employeePhoto: entity.employee_photo
            }
        };
    }
}
exports.default = AuthMapper;
//# sourceMappingURL=authMapper.js.map