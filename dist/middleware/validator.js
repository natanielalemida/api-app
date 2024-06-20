"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validator() {
    function verifyOrganizationNumber(value) {
        const organizationId = Number(value);
        if (typeof organizationId !== "number") {
            throw new Error("Invalid organization number");
        }
    }
    function verifyBodyUser(body) {
        return {
            organizationId: Number(body.organizationId),
            custurmesName: body.custurmesName,
            cpf: body.cpf
        };
    }
    return {
        verifyOrganizationNumber,
        verifyBodyUser
    };
}
exports.default = validator;
//# sourceMappingURL=validator.js.map