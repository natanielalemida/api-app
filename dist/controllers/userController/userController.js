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
const userService_1 = __importDefault(require("../../service/userService/userService"));
class UserController {
    constructor() {
        this.userService = new userService_1.default();
    }
    getUsers(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            const { organizationId } = req.params;
            verifyOrganizationNumber(organizationId);
            return yield this.userService.getUsers(organizationId);
        });
    }
    createUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyBodyUser } = (0, validator_1.default)();
            const { body } = req;
            const data = verifyBodyUser(body);
            const creanteduser = yield this.userService.createUser(data);
            if (!creanteduser)
                return { status: 500, message: 'Cannot create user' };
            return { status: 200, message: 'User created successfully' };
        });
    }
    editUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyBodyUserUpdate } = (0, validator_1.default)();
            const { body } = req;
            const data = verifyBodyUserUpdate(body);
            const creanteduser = yield this.userService.editUser(data);
            if (!creanteduser)
                return { status: 500, message: 'Cannot create user' };
            return { status: 200, message: 'User edited successfully', body: creanteduser };
        });
    }
    deleteUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            const { userId } = req.params;
            verifyOrganizationNumber(userId);
            const creanteduser = yield this.userService.deleteUser(userId);
            if (!creanteduser)
                return { status: 500, message: 'Cannot delete user' };
            return { status: 200, message: 'User deleted' };
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map