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
const productService_1 = __importDefault(require("../../service/productService/productService"));
class ProductController {
    constructor() {
        this.productService = new productService_1.default();
    }
    getProductById(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            const { productId } = req.params;
            verifyOrganizationNumber(productId);
            const product = yield this.productService.getProductById(productId);
            if (!product)
                return { status: 200, message: "product not found" };
            return { status: 400, message: "product found", body: product };
        });
    }
    getProducts(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            const { organizationId } = req.params;
            verifyOrganizationNumber(organizationId);
            return yield this.productService.getProducts(organizationId);
        });
    }
    createProducts(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { verifyProductBody } = (0, validator_1.default)();
            verifyProductBody(body);
            const product = yield this.productService.createProducts(body);
            if (!product)
                return { status: 200, message: "cannot create product" };
            return { status: 200, message: "product created", body: product };
        });
    }
    editProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { verifyProductBodyUpdate } = (0, validator_1.default)();
            verifyProductBodyUpdate(body);
            const product = yield this.productService.editProduct(body);
            if (!product)
                return { status: 200, message: "cannot edited product" };
            return { status: 200, message: "product edited", body: product };
        });
    }
    deleteProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            const { productId } = req.params;
            verifyOrganizationNumber(productId);
            const product = yield this.productService.deleteProduct(productId);
            if (!product)
                return { status: 200, message: "cannot delete product" };
            return {
                status: 400,
                message: "product deleted"
            };
        });
    }
}
exports.default = ProductController;
//# sourceMappingURL=productController.js.map