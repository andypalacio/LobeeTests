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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const login_page_po_1 = require("../../src/PageObjects/login_page.po");
const generic_po_1 = require("../../src/PageObjects/generic.po");
const admin_page_po_1 = require("../../src/PageObjects/admin_page.po");
const config_1 = __importDefault(require("../config"));
let loginPage;
let generic;
let adminPage;
cucumber_1.BeforeAll(() => {
    protractor_1.browser.waitForAngularEnabled(false);
});
cucumber_1.Before(() => {
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
    chai_1.expect(yield generic.urlChangedTo(`${config_1.default.admin.baseUrl}/stays`)).to.be.true;
    //expect(await browser.wait(adminPage.headerItem("Stays").isPresent())).to.be.true;
    yield adminPage.headerItem('...').click();
    yield protractor_1.browser.wait(adminPage.headerOpt('Log out').isPresent());
    yield adminPage.headerOpt('Log out').click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TcGVjcy9sb2dpbl9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELGlEQUFtRTtBQUNuRSwrQkFBOEI7QUFDOUIsdUVBQWdFO0FBQ2hFLGlFQUErRDtBQUMvRCx1RUFBZ0U7QUFDaEUsdURBQStCO0FBRS9CLElBQUksU0FBb0IsQ0FBQztBQUN6QixJQUFJLE9BQW9CLENBQUM7QUFDekIsSUFBSSxTQUFvQixDQUFDO0FBRXpCLG9CQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2Isb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsR0FBRyxFQUFFO0lBQ1YsU0FBUyxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO0lBQzVCLE9BQU8sR0FBRyxJQUFJLHdCQUFXLEVBQUUsQ0FBQztJQUM1QixTQUFTLEdBQUcsSUFBSSx5QkFBUyxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQ0YsMERBQTBELEVBQzFELEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUNqQixDQUFPLEtBQWEsRUFBRSxLQUFhLEVBQUUsRUFBRTtJQUNyQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFBLENBQ0YsQ0FBQztBQUVGLGVBQUksQ0FBQyxrREFBa0QsRUFBRSxDQUFPLFFBQWdCLEVBQUUsRUFBRTtJQUNsRixNQUFNLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDcEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7SUFDN0MsYUFBTSxDQUFDLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLGdCQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUMvRSxtRkFBbUY7SUFDbkYsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=