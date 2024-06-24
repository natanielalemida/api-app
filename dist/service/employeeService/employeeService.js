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
const employeeRepository_1 = __importDefault(require("../../repository/employeeRepository"));
const organizationService_1 = __importDefault(require("../organizationService/organizationService"));
class EmployeeService {
    constructor() {
        this.employeeRepository = new employeeRepository_1.default();
        this.organizationService = new organizationService_1.default();
    }
    getEmployeeByOrganizationId(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizationService.verifyOrganizationById(organizationId);
            return yield this.employeeRepository.getEmployeeByOrganizationId(organizationId);
        });
    }
    validateEmailAndPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.employeeRepository.validateEmailAndPassword(email, password);
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.employeeRepository.getById(userId);
            if (!user)
                throw new Error('User not found');
            return user;
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(userId);
            return yield this.employeeRepository.deleteUser(userId);
        });
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=employeeService.js.map