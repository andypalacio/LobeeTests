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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("@cucumber/cucumber");
const login_page_po_1 = require("../../src/PageObjects/login_page.po");
let loginPage;
cucumber_1.BeforeAll(() => {
    protractor_1.browser.waitForAngularEnabled(false);
});
cucumber_1.Before(() => {
    loginPage = new login_page_po_1.LoginPage();
});
cucumber_1.When('I enter {string} on the {string} field on the Sign in side', { timeout: 5000 }, (value, field) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(loginPage.signInInput(field).sendKeys(value));
}));
cucumber_1.When('I click on the {string} button on the Sign in side', (btnlabel) => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.loginPageButton(btnlabel).click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbl9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TcGVjcy9zaWduX2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLGlEQUE2RDtBQUM3RCx1RUFBZ0U7QUFFaEUsSUFBSSxTQUFvQixDQUFDO0FBRXpCLG9CQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2Isb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsR0FBRyxFQUFFO0lBQ1YsU0FBUyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUNGLDREQUE0RCxFQUM1RCxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFDakIsQ0FBTyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUU7SUFDckMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQSxDQUNGLENBQUM7QUFFRixlQUFJLENBQUMsb0RBQW9ELEVBQUUsQ0FBTyxRQUFnQixFQUFFLEVBQUU7SUFDcEYsTUFBTSxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==