"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("./roles.decorator");
const guards_1 = require("../guards");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, roles_decorator_1.Roles)(...roles), (0, common_1.UseGuards)(guards_1.JwtGuard, guards_1.RolesGuard));
}
//# sourceMappingURL=auth.decorator.js.map