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
const landing_page_po_1 = require("../PageObjects/landing_page.po");
const login_page_po_1 = require("../PageObjects/login_page.po");
const generic_po_1 = require("../PageObjects/generic.po");
let landingPage;
let loginPage;
let generic;
cucumber_1.BeforeAll(() => {
    protractor_1.browser.waitForAngularEnabled(false);
});
cucumber_1.Before(() => {
    landingPage = new landing_page_po_1.LandingPage();
    loginPage = new login_page_po_1.LoginPage();
    generic = new generic_po_1.GenericPage();
});
cucumber_1.When('I click on the {string} button on the header', (btnlabel) => __awaiter(void 0, void 0, void 0, function* () {
    yield landingPage.headerSignInButton(btnlabel).click();
}));
cucumber_1.When('I click on the {string} button on the home', (btnlabel) => __awaiter(void 0, void 0, void 0, function* () {
    yield landingPage.homeSignInButton(btnlabel).click();
}));
cucumber_1.When('I click on the {string} secondary button', (btnlabel) => __awaiter(void 0, void 0, void 0, function* () {
    yield landingPage.secondaryButton(btnlabel).click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ19wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlY3MvbGFuZGluZ19wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELGlEQUF5RTtBQUN6RSxvRUFBNkQ7QUFFN0QsZ0VBQXdEO0FBQ3hELDBEQUF1RDtBQUV2RCxJQUFJLFdBQXdCLENBQUM7QUFDN0IsSUFBSSxTQUFvQixDQUFDO0FBQ3pCLElBQUksT0FBb0IsQ0FBQztBQUV6QixvQkFBUyxDQUFDLEdBQUcsRUFBRTtJQUNYLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEdBQUcsRUFBRTtJQUNSLFdBQVcsR0FBRyxJQUFJLDZCQUFXLEVBQUUsQ0FBQztJQUNoQyxTQUFTLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7SUFDNUIsT0FBTyxHQUFHLElBQUksd0JBQVcsRUFBRSxDQUFDO0FBRWhDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhDQUE4QyxFQUFFLENBQU8sUUFBZ0IsRUFBRSxFQUFFO0lBQzVFLE1BQU0sV0FBVyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNENBQTRDLEVBQUUsQ0FBTyxRQUFnQixFQUFFLEVBQUU7SUFDMUUsTUFBTSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdkQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxDQUFPLFFBQWdCLEVBQUUsRUFBRTtJQUN4RSxNQUFNLFdBQVcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9