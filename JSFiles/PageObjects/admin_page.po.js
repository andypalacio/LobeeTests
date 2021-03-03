"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPage = void 0;
const protractor_1 = require("protractor");
class AdminPage {
    headerItem(tabName) {
        return protractor_1.element(protractor_1.by.cssContainingText(".item", tabName));
    }
    headerOpt(optName) {
        return protractor_1.element(protractor_1.by.linkText(optName));
    }
}
exports.AdminPage = AdminPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5fcGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL2FkbWluX3BhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQStDO0FBRS9DLE1BQWEsU0FBUztJQUVsQixVQUFVLENBQUMsT0FBZTtRQUMxQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxTQUFTLENBQUMsT0FBZTtRQUNyQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FFSjtBQVZELDhCQVVDIn0=