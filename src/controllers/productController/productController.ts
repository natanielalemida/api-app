import IProductController from "../../interface/controllers/IProductController";
import validator from "../../middleware/validator";
import ProductService from "../../service/productService/productService";
import { ProductDto } from "../../types/product/productDto";
import { ProductStatusDto } from "../../types/product/productStatusDto";
import { statusDto } from "../../types/statusDto";

export default class ProductController implements IProductController {
      private productService = new ProductService()

     public async getProductById(req) : Promise<ProductStatusDto> {

        const { verifyOrganizationNumber } = validator()

        const { productId } = req.params;

        verifyOrganizationNumber(productId)
      
       const product = await this.productService.getProductById(productId)

       if(!product) return {status: 400, message: "product not found"}

       return {status: 200, message: "product found", body: product}
     }

     public async getProducts(req) : Promise<ProductDto[]> {

      const { verifyOrganizationNumber } = validator()

      const { organizationId } = req.params;

      verifyOrganizationNumber(organizationId)
    
     return await this.productService.getProducts(organizationId)

   }

   public async createProducts(req) : Promise<ProductStatusDto> {

      const { body } = req;

      const { verifyProductBody } = validator()

      verifyProductBody(body)

      const product = await this.productService.createProducts(body)

      if(!product) return {status: 400, message: "cannot create product"}

      return { status: 200, message: "product created", body: product}

   }

   public async editProduct(req) : Promise<ProductStatusDto> {

      const { body } = req;

      const { verifyProductBodyUpdate } = validator()

      verifyProductBodyUpdate(body)

      const product = await this.productService.editProduct(body)

      if(!product) return {status: 400, message: "cannot edited product"}

      return { status: 200, message: "product edited", body: product}

   }

   public async deleteProduct(req) : Promise<statusDto> {

      const { verifyOrganizationNumber } = validator()

      const { productId } = req.params;

      verifyOrganizationNumber(productId)
    
     const product = await this.productService.deleteProduct(productId)

     if(!product) return {status: 400, message: "cannot delete product"}

     return {
      status: 200,
      message: "product deleted"
     }

   }

  

}