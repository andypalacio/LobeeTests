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
cucumber_1.When('I enter {string} on the {string} field on the Sign in side', { timeout: 5000 }, (value, field) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(loginPage.signInInput(field).sendKeys(value));
}));
cucumber_1.When('I click on the {string} button on the Sign in side', (btnlabel) => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.loginPageButton(btnlabel).click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbl9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWNzL3NpZ25faW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsaURBQXlFO0FBQ3pFLG9FQUE2RDtBQUU3RCxnRUFBd0Q7QUFDeEQsMERBQXVEO0FBRXZELElBQUksV0FBd0IsQ0FBQztBQUM3QixJQUFJLFNBQW9CLENBQUM7QUFDekIsSUFBSSxPQUFvQixDQUFDO0FBRXpCLG9CQUFTLENBQUMsR0FBRyxFQUFFO0lBQ1gsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsR0FBRyxFQUFFO0lBQ1IsV0FBVyxHQUFHLElBQUksNkJBQVcsRUFBRSxDQUFDO0lBQ2hDLFNBQVMsR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztJQUM1QixPQUFPLEdBQUcsSUFBSSx3QkFBVyxFQUFFLENBQUM7QUFFaEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNERBQTRELEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBTyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUU7SUFDekgsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0RBQW9ELEVBQUUsQ0FBTyxRQUFnQixFQUFFLEVBQUU7SUFDbEYsTUFBTSxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==