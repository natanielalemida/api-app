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
const saleMapper_1 = __importDefault(require("../mapper/saleMapper"));
class SaleRepository {
    getSolds(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, connetion_1.default)("sales")
                .select("*")
                .where("organization_id", organizationId)
                .andWhere("active", 1);
            return saleMapper_1.default.mappQuery(result);
        });
    }
    getSoldById(saleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, connetion_1.default)("sales")
                .select("*")
                .where("sale_id", saleId)
                .first();
            if (!result)
                return undefined;
            return saleMapper_1.default.mappOne(result);
        });
    }
    createSale(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const [id] = yield (0, connetion_1.default)("sales").insert({
                product_id: body.productId,
                organization_id: body.organizationId,
                sale_type_id: body.saleTypeId,
                sold_by: body.soldBy,
                user_id: body.userId ? body.userId : 0,
                amount: body.amount,
                created_at: new Date(body.createdAt),
                updated_at: null,
            });
            const result = yield this.getSoldById(id);
            if (!result)
                throw new Error("cannot create sale");
            return result;
        });
    }
    updateSold(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, connetion_1.default)("sales")
                .update({
                product_id: body.productId,
                organization_id: body.organizationId,
                sold_by: body.soldBy,
                sale_type_id: body.saleTypeId,
                user_id: body.userId ? body.userId : 0,
                amount: body.amount,
                created_at: new Date(body.createdAt),
                updated_at: new Date(),
            })
                .where("sale_id", body.saleId);
            if (!id)
                throw new Error("cannot edit sale");
            return yield this.getSoldById(body.saleId);
        });
    }
    deleteSold(soldId) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, connetion_1.default)("sales")
                .update({ active: 0 })
                .where("sale_id", soldId);
            if (!id)
                throw new Error("cannot delete sale");
            return true;
        });
    }
}
exports.default = SaleRepository;
//# sourceMappingURL=saleRepository.js.map