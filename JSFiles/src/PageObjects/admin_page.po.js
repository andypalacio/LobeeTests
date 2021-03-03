"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPage = void 0;
const protractor_1 = require("protractor");
class AdminPage {
    headerItem(tabName) {
        return protractor_1.element(protractor_1.by.cssContainingText('.item', tabName));
    }
    headerOpt(optName) {
        return protractor_1.element(protractor_1.by.linkText(optName));
    }
}
exports.AdminPage = AdminPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5fcGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9QYWdlT2JqZWN0cy9hZG1pbl9wYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5QztBQUV6QyxNQUFhLFNBQVM7SUFDcEIsVUFBVSxDQUFDLE9BQWU7UUFDeEIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsU0FBUyxDQUFDLE9BQWU7UUFDdkIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFSRCw4QkFRQyJ9