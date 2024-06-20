"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validator() {
    function verifyOrganizationNumber(value) {
        const organizationId = Number(value);
        if (typeof organizationId !== "number") {
            throw new Error("Invalid organization number");
        }
    }
    return {
        verifyOrganizationNumber,
    };
}
exports.default = validator;
//# sourceMappingURL=validator.js.map