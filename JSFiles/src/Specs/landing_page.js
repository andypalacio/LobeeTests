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
const landing_page_po_1 = require("../../src/PageObjects/landing_page.po");
let landingPage;
cucumber_1.BeforeAll(() => {
    protractor_1.browser.waitForAngularEnabled(false);
});
cucumber_1.Before(() => {
    landingPage = new landing_page_po_1.LandingPage();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ19wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1NwZWNzL2xhbmRpbmdfcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyxpREFBNkQ7QUFDN0QsMkVBQW9FO0FBRXBFLElBQUksV0FBd0IsQ0FBQztBQUU3QixvQkFBUyxDQUFDLEdBQUcsRUFBRTtJQUNiLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEdBQUcsRUFBRTtJQUNWLFdBQVcsR0FBRyxJQUFJLDZCQUFXLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4Q0FBOEMsRUFBRSxDQUFPLFFBQWdCLEVBQUUsRUFBRTtJQUM5RSxNQUFNLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLENBQU8sUUFBZ0IsRUFBRSxFQUFFO0lBQzVFLE1BQU0sV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMENBQTBDLEVBQUUsQ0FBTyxRQUFnQixFQUFFLEVBQUU7SUFDMUUsTUFBTSxXQUFXLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==