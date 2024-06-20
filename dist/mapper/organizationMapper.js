"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrganizationMapper {
    static mappOne(organizationDto) {
        return {
            idOrganization: organizationDto.id_organization,
            organizationName: organizationDto.organization_name,
            active: organizationDto.active
        };
    }
}
exports.default = OrganizationMapper;
//# sourceMappingURL=organizationMapper.js.map