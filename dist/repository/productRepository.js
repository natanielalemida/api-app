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
const productMapper_1 = __importDefault(require("../mapper/productMapper"));
class ProductRepository {
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, connetion_1.default)("product")
                .select("*")
                .where("product_id", productId)
                .andWhere("active", 1)
                .first();
            if (!data)
                return undefined;
            return productMapper_1.default.mappOne(data);
        });
    }
    getLastModifyQuantity(productId, saleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, connetion_1.default)("sale_product")
                .select("quantity")
                .where("product_id", productId)
                .andWhere("sale_id", saleId)
                .andWhere("active", 1)
                .first();
        });
    }
    getProductByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, connetion_1.default)("product")
                .select("*")
                .where("product_code", code)
                .andWhere("active", 1)
                .first();
            if (!data)
                return undefined;
            return productMapper_1.default.mappOne(data);
        });
    }
    getProducts(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, connetion_1.default)("product")
                .select("*")
                .where("organization_id", organizationId)
                .andWhere("active", 1);
            if (!data)
                return [];
            return productMapper_1.default.mapGetProducts(data);
        });
    }
    createProducts(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const [productId] = yield (0, connetion_1.default)("product").insert({
                organization_id: body.organizationId,
                product_name: body.productName,
                product_code: body.productCode,
                product_quantity: body.productQuantity,
                price: body.productPrice,
            });
            const product = yield this.getProductById(productId);
            if (!product)
                throw new Error("Unable to create product, try again");
            return product;
        });
    }
    editProduct(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const productId = yield (0, connetion_1.default)("product")
                .update({
                organization_id: body.organizationId,
                product_name: body.productName,
                product_code: body.productCode,
                product_quantity: body.productQuantity,
                price: body.productPrice,
            })
                .where("product_id", body.productId)
                .andWhere("active", 1);
            if (!productId)
                throw new Error("Unable to update product, try again");
            return yield this.getProductById(body.productId);
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, connetion_1.default)("product")
                .update({ active: 0 })
                .where("product_id", productId);
            const product = yield this.getProductById(id);
            if (product)
                false;
            return true;
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=productRepository.js.map