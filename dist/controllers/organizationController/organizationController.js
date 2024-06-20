"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("../../middleware/validator"));
const organizationService_1 = __importDefault(require("../../service/organizationService/organizationService"));
class OrganizationController {
    constructor() {
        this.organizationService = new organizationService_1.default();
    }
    getOrganizationById(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { verifyOrganizationNumber } = (0, validator_1.default)();
            verifyOrganizationNumber(organizationId);
            return yield this.organizationService.getOrganizationById(organizationId);
        });
    }
}
exports.default = OrganizationController;
//# sourceMappingURL=organizationController.js.map