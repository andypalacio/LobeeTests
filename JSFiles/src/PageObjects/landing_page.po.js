"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage = void 0;
const protractor_1 = require("protractor");
class LandingPage {
    secondaryButton(btnLabel) {
        return protractor_1.element(protractor_1.by.cssContainingText('.button', btnLabel));
    }
    homeSignInButton(btnLabel) {
        return protractor_1.element(protractor_1.by.css('.Home')).element(protractor_1.by.cssContainingText('.button', btnLabel));
    }
    headerSignInButton(btnLabel) {
        return protractor_1.element(protractor_1.by.css('.Header')).element(protractor_1.by.cssContainingText('.button', btnLabel));
    }
}
exports.LandingPage = LandingPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ19wYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1BhZ2VPYmplY3RzL2xhbmRpbmdfcGFnZS5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUM7QUFFekMsTUFBYSxXQUFXO0lBQ3RCLGVBQWUsQ0FBQyxRQUFnQjtRQUM5QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUMvQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELGtCQUFrQixDQUFDLFFBQWdCO1FBQ2pDLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0NBQ0Y7QUFaRCxrQ0FZQyJ9