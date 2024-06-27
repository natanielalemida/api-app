"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductMapper {
    static mappOne(productDto) {
        return {
            productId: productDto.product_id,
            organizationId: productDto.organization_id,
            productName: productDto.product_name,
            productCode: productDto.product_code,
            productPrice: productDto.price,
            productQuantity: productDto.product_quantity,
        };
    }
    static mapGetProducts(query) {
        return query.map((productDto) => {
            return {
                productId: productDto.product_id,
                organizationId: productDto.organization_id,
                productName: productDto.product_name,
                productCode: productDto.product_code,
                productPrice: productDto.price,
                productQuantity: productDto.product_quantity,
            };
        });
    }
}
exports.default = ProductMapper;
//# sourceMappingURL=productMapper.js.map