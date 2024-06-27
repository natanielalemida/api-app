import { productCreateDto } from "../types/product/productCreateDto";
import { ProductDto } from "../types/product/productDto";
import { SaleCreateDto } from "../types/sale/saleCreateDto";
import { SaleUpdateDto } from "../types/sale/saleUpdateDto";
import { userDto } from "../types/userTypes/userDto";
import { UserUpdateDto } from "../types/userTypes/userUpdateDto";

interface Validator {
  verifyOrganizationNumber: (value: unknown) => void;
  verifyString: (value: unknown) => void;
  verifyBodyUser: (body: userDto) => userDto
  verifyBodyUserUpdate: (body: UserUpdateDto) => UserUpdateDto
  verifyProductBody: (body: productCreateDto) => productCreateDto
  verifyProductBodyUpdate: (body: ProductDto) => ProductDto
  verifySaleBodyUpdate: (body: SaleUpdateDto) => SaleUpdateDto
  verifySaleBody: (body: SaleCreateDto) => SaleCreateDto
}

export default function validator(): Validator {

  function verifyOrganizationNumber(value: unknown): void {

    const organizationId = Number(value)

    if (typeof organizationId !== "number") {
      throw new Error("Invalid organization number");
    }

  }

  function verifyString(value: unknown): void {

    if (typeof value !== "string") {
      throw new Error("Invalid string");
    }

  }

  function verifyBodyUser(body: userDto) : userDto {
    return {
        organizationId: Number(body.organizationId),
        custurmesName: body.custurmesName,
        cpf: body.cpf
    }
  }

  function verifyProductBody(body: productCreateDto) : productCreateDto {
    return {
        organizationId: Number(body.organizationId),
        productName: body.productCode,
        productCode: body.productCode,
        productPrice: body.productPrice,
        productQuantity: body.productQuantity
    }
  }

  function verifyProductBodyUpdate(body: ProductDto) : ProductDto {
    return {
        productId: Number(body.productId),
        organizationId: Number(body.organizationId),
        productName: body.productCode,
        productCode: body.productCode,
        productPrice: body.productPrice,
        productQuantity: body.productQuantity
    }
  }

  function verifySaleBodyUpdate(body: SaleUpdateDto) : SaleUpdateDto {
    return {
      saleId: body.saleId,
      productId: body.productId,
      organizationId: body.organizationId,
      saleTypeId: body.saleTypeId,
      soldBy: body.soldBy,
      userId: body.userId,
      amount: body.amount,
      createdAt: body.createdAt,
      updateAt: body.updateAt
    }
  }

  function verifySaleBody(body: SaleCreateDto) : SaleCreateDto {
    return {
      products: body.products,
      organizationId: body.organizationId,
      saleTypeId: body.saleTypeId,
      soldBy: body.soldBy,
      userId: body.userId,
      amount: body.amount,
      createdAt: body.createdAt
    }
  }

  function verifyBodyUserUpdate(body: UserUpdateDto) : UserUpdateDto {
    return {
        customersId: Number(body.customersId),
        organizationId: Number(body.organizationId),
        custurmesName: body.custurmesName,
        cpf: body.cpf
    }
  }

  return {
    verifyOrganizationNumber,
    verifyString,
    verifyBodyUser,
    verifyBodyUserUpdate,
    verifyProductBody,
    verifyProductBodyUpdate,
    verifySaleBodyUpdate,
    verifySaleBody
  };
}
