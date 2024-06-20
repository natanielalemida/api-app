import { userDto } from "../types/userTypes/userDto";

interface Validator {
  verifyOrganizationNumber: (value: unknown) => void;
  verifyBodyUser: (body: userDto) => userDto
}

export default function validator(): Validator {

  function verifyOrganizationNumber(value: unknown): void {

    const organizationId = Number(value)

    if (typeof organizationId !== "number") {
      throw new Error("Invalid organization number");
    }

  }

  function verifyBodyUser(body: userDto) : userDto {
    return {
        organizationId: Number(body.organizationId),
        custurmesName: body.custurmesName,
        cpf: body.cpf
    }
  }

  return {
    verifyOrganizationNumber,
    verifyBodyUser
  };
}
