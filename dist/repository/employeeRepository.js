"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connetion_1 = __importDefault(require("../database/connetion"));
const authMapper_1 = __importDefault(require("../mapper/authMapper"));
const employeeMapper_1 = __importDefault(require("../mapper/employeeMapper"));
class EmployeeRepository {
    getEmployeeByOrganizationId(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield (0, connetion_1.default)("employee")
                .select("id_employee", "employee_name", "employee_email", "employee_cpf", "employee_phone", "employee_photo")
                .where("organization_id", organizationId)
                .andWhere("active", 1);
            if (!employees.length)
                return undefined;
            return employeeMapper_1.default.mappOne(employees);
        });
    }
    validateEmailAndPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, connetion_1.default)("employee").select('*').where('employee_email', email).andWhere('password', password).andWhere('active', 1).first();
            if (!result)
                return {
                    status: false
                };
            return authMapper_1.default.mappOne(result);
        });
    }
    ;
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, connetion_1.default)("employee").select('*').where('id_employee', userId).andWhere('active', 1).first();
            if (!result)
                undefined;
            const user = authMapper_1.default.mappOne(result);
            return user.body;
        });
    }
    ;
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, connetion_1.default)("employee").update({ active: 0 }).where('id_employee', userId);
            if (!result)
                false;
            return true;
        });
    }
    ;
}
exports.default = EmployeeRepository;
//# sourceMappingURL=employeeRepository.js.map