"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage = void 0;
const protractor_1 = require("protractor");
class LandingPage {
    secondaryButton(btnLabel) {
        return protractor_1.element(protractor_1.by.cssContainingText(".button", btnLabel));
    }
    homeSignInButton(btnLabel) {
        return protractor_1.element(protractor_1.by.css(".Home")).element(protractor_1.by.cssContainingText(".button", btnLabel));
    }
    headerSignInButton(btnLabel) {
        return protractor_1.element(protractor_1.by.css(".Header")).element(protractor_1.by.cssContainingText(".button", btnLabel));
    }
}
exports.LandingPage = LandingPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ19wYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvbGFuZGluZ19wYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUErQztBQUUvQyxNQUFhLFdBQVc7SUFDcEIsZUFBZSxDQUFDLFFBQWdCO1FBQzVCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQzdCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBZ0I7UUFDL0IsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXpGLENBQUM7Q0FHSjtBQWZELGtDQWVDIn0=