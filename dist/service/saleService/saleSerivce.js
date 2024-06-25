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
const saleRepository_1 = __importDefault(require("../../repository/saleRepository"));
const employeeService_1 = __importDefault(require("../employeeService/employeeService"));
const organizationService_1 = __importDefault(require("../organizationService/organizationService"));
const productService_1 = __importDefault(require("../productService/productService"));
class SaleService {
    constructor() {
        this.saleRepository = new saleRepository_1.default();
        this.organizationService = new organizationService_1.default();
        this.employeeService = new employeeService_1.default();
        this.productService = new productService_1.default();
    }
    getSolds(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizationService.verifyOrganizationById(organizationId);
            return yield this.saleRepository.getSolds(organizationId);
        });
    }
    getSoldById(saleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sold = yield this.saleRepository.getSoldById(saleId);
            if (!sold)
                throw new Error("cannot find user");
            return sold;
        });
    }
    createSale(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productService.validatorProduct(body.productId);
            yield this.organizationService.verifyOrganizationById(body.organizationId);
            yield this.employeeService.getById(body.soldBy);
            const sale = yield this.saleRepository.createSale(body);
            if (!sale)
                throw new Error("cannot create user");
            return sale;
        });
    }
    updateSold(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productService.validatorProduct(body.productId);
            yield this.organizationService.verifyOrganizationById(body.organizationId);
            yield this.employeeService.getById(body.soldBy);
            const sale = yield this.saleRepository.updateSold(body);
            if (!sale)
                throw new Error("cannot update user");
            return sale;
        });
    }
    deleteSold(saleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.saleRepository.deleteSold(saleId);
        });
    }
}
exports.default = SaleService;
//# sourceMappingURL=saleSerivce.js.map