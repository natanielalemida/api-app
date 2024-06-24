import { productCreateDto } from "../../types/product/productCreateDto";
import { ProductDto } from "../../types/product/productDto";
import { ProductStatusDto } from "../../types/product/productStatusDto";
import { statusDto } from "../../types/statusDto";

export default abstract class IProductController {
    abstract getProductById(req) : Promise<ProductStatusDto>
    abstract getProducts(organizationId: number) : Promise<ProductDto[]>
    abstract createProducts(body: productCreateDto) : Promise<ProductStatusDto>
    abstract editProduct(body: ProductDto) : Promise<ProductStatusDto>
    abstract deleteProduct(productId: number) : Promise<statusDto>
}