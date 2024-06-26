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
const userRepository_1 = __importDefault(require("../../repository/userRepository"));
const organizationService_1 = __importDefault(require("../organizationService/organizationService"));
class UserService {
    constructor() {
        this.userRepository = new userRepository_1.default();
        this.organizatioService = new organizationService_1.default();
    }
    getUsers(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizatioService.verifyOrganizationById(organizationId);
            return yield this.userRepository.getUsers(organizationId);
        });
    }
    getUserCPF(CPF) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUserByCPF(CPF);
        });
    }
    getUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getUserById(id);
            if (!user) {
                throw new Error("user not registred");
            }
            return user;
        });
    }
    createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizatioService.verifyOrganizationById(body.organizationId);
            return yield this.userRepository.createUser(body);
        });
    }
    editUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizatioService.verifyOrganizationById(body.organizationId);
            return yield this.userRepository.editUser(body);
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserId(userId);
            return yield this.userRepository.deleteUser(userId);
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=userService.js.map