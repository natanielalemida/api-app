import { productCreateDto } from "../types/product/productCreateDto";
import { userDto } from "../types/userTypes/userDto";
import { UserUpdateDto } from "../types/userTypes/userUpdateDto";

interface Validator {
  verifyOrganizationNumber: (value: unknown) => void;
  verifyString: (value: unknown) => void;
  verifyBodyUser: (body: userDto) => userDto
  verifyBodyUserUpdate: (body: UserUpdateDto) => UserUpdateDto
  verifyProductBody: (body: productCreateDto) => productCreateDto
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
    verifyProductBody
  };
}
