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
const chai_1 = require("chai");
const login_page_po_1 = require("../PageObjects/login_page.po");
const generic_po_1 = require("../PageObjects/generic.po");
const admin_page_po_1 = require("../PageObjects/admin_page.po");
let landingPage;
let loginPage;
let generic;
let adminPage;
cucumber_1.BeforeAll(() => {
    protractor_1.browser.waitForAngularEnabled(false);
});
cucumber_1.Before(() => {
    landingPage = new landing_page_po_1.LandingPage();
    loginPage = new login_page_po_1.LoginPage();
    generic = new generic_po_1.GenericPage();
    adminPage = new admin_page_po_1.AdminPage();
});
cucumber_1.When('I enter {string} on the {string} field on the login side', { timeout: 5000 }, (value, field) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(loginPage.loginInput(field).sendKeys(value));
}));
cucumber_1.When('I click on the {string} button on the login side', (btnlabel) => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.loginPageButton(btnlabel).click();
}));
cucumber_1.Then('I am successfully logged in', () => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield generic.urlChangedTo("https://admin.getlobee.com/stays")).to.be.true;
    //expect(await browser.wait(adminPage.headerItem("Stays").isPresent())).to.be.true;
    yield adminPage.headerItem("...").click();
    yield protractor_1.browser.wait(adminPage.headerOpt("Log out").isPresent());
    yield adminPage.headerOpt("Log out").click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWNzL2xvZ2luX1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsaURBQXlFO0FBQ3pFLG9FQUE2RDtBQUM3RCwrQkFBOEI7QUFDOUIsZ0VBQXdEO0FBQ3hELDBEQUF1RDtBQUN2RCxnRUFBd0Q7QUFHeEQsSUFBSSxXQUF3QixDQUFDO0FBQzdCLElBQUksU0FBb0IsQ0FBQztBQUN6QixJQUFJLE9BQW9CLENBQUM7QUFDekIsSUFBSSxTQUFvQixDQUFDO0FBRXpCLG9CQUFTLENBQUMsR0FBRyxFQUFFO0lBQ1gsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsR0FBRyxFQUFFO0lBQ1IsV0FBVyxHQUFHLElBQUksNkJBQVcsRUFBRSxDQUFDO0lBQ2hDLFNBQVMsR0FBRyxJQUFJLHlCQUFTLEVBQUUsQ0FBQztJQUM1QixPQUFPLEdBQUcsSUFBSSx3QkFBVyxFQUFFLENBQUM7SUFDNUIsU0FBUyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO0FBRWhDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBEQUEwRCxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQU8sS0FBYSxFQUFFLEtBQWEsRUFBRSxFQUFFO0lBQ3ZILE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtEQUFrRCxFQUFFLENBQU8sUUFBZ0IsRUFBRSxFQUFFO0lBQ2hGLE1BQU0sU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZCQUE2QixFQUFFLEdBQVMsRUFBRTtJQUMzQyxhQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsRixtRkFBbUY7SUFDbkYsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=