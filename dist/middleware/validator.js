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
        verifyBodyUserUpdate
    };
}
exports.default = validator;
//# sourceMappingURL=validator.js.map