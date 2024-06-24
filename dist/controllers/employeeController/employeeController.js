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
const validator_1 = __importDefault(require("../../middleware/validator"));
const employeeService_1 = __importDefault(require("../../service/employeeService/employeeService"));
class EmployeeController {
    constructor() {
        this.employeeService = new employeeService_1.default();
    }
    getEmployeeByOrganizationId(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            const { organizationId } = req.params;
            verifyOrganizationNumber(organizationId);
            return yield this.employeeService.getEmployeeByOrganizationId(organizationId);
        });
    }
    validateEmailAndPassword(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const { verifyString } = (0, validator_1.default)();
            verifyString(email);
            verifyString(password);
            return yield this.employeeService.validateEmailAndPassword(email, password);
        });
    }
    deleteUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            verifyOrganizationNumber(userId);
            const user = yield this.employeeService.deleteUser(userId);
            if (!user) {
                return {
                    status: 500,
                    message: "cannot delet user"
                };
            }
            return {
                status: 200,
                message: "user deleted"
            };
        });
    }
}
exports.default = EmployeeController;
//# sourceMappingURL=employeeController.js.map