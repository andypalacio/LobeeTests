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
cucumber_1.When('I navigate to {string}', { timeout: 50000 }, (URL) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('holis');
    yield protractor_1.browser.get(URL);
}));
cucumber_1.Then('the page is loaded showing the text {string}', { timeout: 50000 }, (subtittle) => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield protractor_1.browser.wait(generic.genericText(subtittle).isPresent())).to.be.true;
}));
cucumber_1.When('I click on the {string} button', (btnlabel) => __awaiter(void 0, void 0, void 0, function* () {
    yield generic.genericButton(btnlabel).click();
}));
cucumber_1.When('I am redirected to {string}', { timeout: 50000 }, (url) => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield generic.urlChangedTo(url)).to.be.true;
}));
cucumber_1.When('the focus is on the {string} field', (string) => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield generic.focusedInput().getAttribute("placeholder")).equals(string);
}));
cucumber_1.When('I click on the {string} link', (linktext) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(generic.link(linktext).isPresent(), 5000);
    yield generic.link(linktext).click();
}));
cucumber_1.Then('The page {string} is open', { timeout: 5000 }, (url) => __awaiter(void 0, void 0, void 0, function* () {
    const tabs = yield protractor_1.browser.getAllWindowHandles();
    protractor_1.browser.switchTo().window(tabs[1]);
    const tabURL = yield protractor_1.browser.getCurrentUrl();
    yield protractor_1.browser.driver.close();
    protractor_1.browser.switchTo().window(tabs[0]);
    chai_1.expect(tabURL).to.equal(url);
}));
cucumber_1.Then('The error message {string} is displayed', { timeout: 5000 }, (mesg) => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield protractor_1.browser.wait(() => {
        let comp = generic.errorMessage(mesg);
        return comp.isPresent();
    }, 5000)).to.be.true;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWNzL2dlbmVyYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsaURBQXlFO0FBQ3pFLG9FQUE2RDtBQUM3RCwrQkFBOEI7QUFDOUIsZ0VBQXdEO0FBQ3hELDBEQUF1RDtBQUd2RCxJQUFJLFdBQXdCLENBQUM7QUFDN0IsSUFBSSxTQUFvQixDQUFDO0FBQ3pCLElBQUksT0FBb0IsQ0FBQztBQUd6QixvQkFBUyxDQUFDLEdBQUcsRUFBRTtJQUNYLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEdBQUcsRUFBRTtJQUNSLFdBQVcsR0FBRyxJQUFJLDZCQUFXLEVBQUUsQ0FBQztJQUNoQyxTQUFTLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7SUFDNUIsT0FBTyxHQUFHLElBQUksd0JBQVcsRUFBRSxDQUFDO0FBRWhDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQU8sR0FBVyxFQUFFLEVBQUU7SUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOENBQThDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBTyxTQUFpQixFQUFFLEVBQUU7SUFDakcsYUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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