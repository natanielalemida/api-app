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
const saleSerivce_1 = __importDefault(require("../../service/saleService/saleSerivce"));
class SaleController {
    constructor() {
        this.saleService = new saleSerivce_1.default();
    }
    getSolds(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { organizationId } = req.params;
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            verifyOrganizationNumber(organizationId);
            return yield this.saleService.getSolds(organizationId);
        });
    }
    getSoldById(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { saleId } = req.params;
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            verifyOrganizationNumber(saleId);
            const result = yield this.saleService.getSoldById(saleId);
            if (!result)
                return { status: 200, message: 'sale not found' };
            return { status: 400, message: 'user found', body: result };
        });
    }
    createSale(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { verifySaleBody } = (0, validator_1.default)();
            verifySaleBody(body);
            const sale = yield this.saleService.createSale(body);
            if (!sale)
                return { status: 200, message: "cannot create sale" };
            return { status: 200, message: "sale created", body: sale };
        });
    }
    updateSold(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { verifySaleBodyUpdate } = (0, validator_1.default)();
            verifySaleBodyUpdate(body);
            const sale = yield this.saleService.updateSold(body);
            if (!sale)
                return { status: 200, message: "cannot cedit sale" };
            return { status: 200, message: "sale edited", body: sale };
        });
    }
    deleteSold(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { saleId } = req.params;
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            verifyOrganizationNumber(saleId);
            const result = yield this.saleService.deleteSold(saleId);
            if (!result)
                return { status: 200, message: 'cannot delet sale' };
            return { status: 400, message: 'sale deleted' };
        });
    }
}
exports.default = SaleController;
//# sourceMappingURL=saleController.js.map