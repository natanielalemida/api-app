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
const productRepository_1 = __importDefault(require("../../repository/productRepository"));
const organizationService_1 = __importDefault(require("../organizationService/organizationService"));
class ProductService {
    constructor() {
        this.productRepository = new productRepository_1.default();
        this.organizationSerivce = new organizationService_1.default();
    }
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.getProductById(productId);
            if (!product)
                throw new Error("product not found");
            return product;
        });
    }
    validatorProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.getProductById(productId);
            if (!product)
                throw new Error("product not found");
            return product;
        });
    }
    getLastModifyQuantity(productId, saleId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProductById(productId);
            return yield this.productRepository.getLastModifyQuantity(productId, saleId);
        });
    }
    getProducts(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizationSerivce.verifyOrganizationById(organizationId);
            return yield this.productRepository.getProducts(organizationId);
        });
    }
    createProducts(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.getProductByCode(body.productCode);
            if (product)
                throw new Error("product with the same code already exist");
            return yield this.productRepository.createProducts(body);
        });
    }
    editProduct(body) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProductById(body.productId);
            return yield this.productRepository.editProduct(body);
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProductById(productId);
            return yield this.productRepository.deleteProduct(productId);
        });
    }
}
exports.default = ProductService;
//# sourceMappingURL=productService.js.map