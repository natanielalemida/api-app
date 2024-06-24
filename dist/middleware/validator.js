"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validator() {
    function verifyOrganizationNumber(value) {
        const organizationId = Number(value);
        if (typeof organizationId !== "number") {
            throw new Error("Invalid organization number");
        }
    }
    function verifyString(value) {
        if (typeof value !== "string") {
            throw new Error("Invalid string");
        }
    }
    function verifyBodyUser(body) {
        return {
            organizationId: Number(body.organizationId),
            custurmesName: body.custurmesName,
            cpf: body.cpf
        };
    }
    function verifyProductBody(body) {
        return {
            organizationId: Number(body.organizationId),
            productName: body.productCode,
            productCode: body.productCode,
        };
    }
    function verifyBodyUserUpdate(body) {
        return {
            customersId: Number(body.customersId),
            organizationId: Number(body.organizationId),
            custurmesName: body.custurmesName,
            cpf: body.cpf
        };
    }
    return {
        verifyOrganizationNumber,
        verifyString,
        verifyBodyUser,
        verifyBodyUserUpdate,
        verifyProductBody
    };
}
exports.default = validator;
//# sourceMappingURL=validator.js.map