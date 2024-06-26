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
class UserRepository {
    getUsers(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, connetion_1.default)("customers")
                .select("*")
                .where("organization_id", organizationId)
                .andWhere("active", 1);
            if (!users.length)
                return [];
            return users;
        });
    }
    getUserByCPF(CPF) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, connetion_1.default)("customers")
                .select("*")
                .where("cpf", CPF)
                .first();
            if (!users)
                return undefined;
            return users;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, connetion_1.default)("customers")
                .select("id_customers", "cpf", "customers_name")
                .where("id_customers", id)
                .first();
            if (!users)
                return undefined;
            return users;
        });
    }
    createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const [user] = yield (0, connetion_1.default)("customers").insert({
                organization_id: body.organizationId,
                customers_name: body.custurmesName,
                cpf: body.cpf,
            });
            const newUser = yield this.getUserById(user);
            if (!newUser)
                throw new Error("Falha ao criar usuario!");
            return user;
        });
    }
    editUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, connetion_1.default)("customers")
                .update({
                organization_id: body.organizationId,
                customers_name: body.custurmesName,
                cpf: body.cpf,
            })
                .where("id_customers", body.customersId);
            return yield this.getUserById(user);
            ;
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, connetion_1.default)("customers")
                .update({ active: 0 })
                .where("id_customers", userId);
            if (!user)
                return undefined;
            return true;
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=userRepository.js.map