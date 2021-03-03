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
const chai_1 = require("chai");
const generic_po_1 = require("../../src/PageObjects/generic.po");
let generic;
cucumber_1.BeforeAll(() => {
    protractor_1.browser.waitForAngularEnabled(false);
});
cucumber_1.Before(() => {
    generic = new generic_po_1.GenericPage();
});
cucumber_1.When('I navigate to {string}', { timeout: 50000 }, (URL) => __awaiter(void 0, void 0, void 0, function* () {
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
    chai_1.expect(yield generic.focusedInput().getAttribute('placeholder')).equals(string);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TcGVjcy9nZW5lcmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLGlEQUFtRTtBQUNuRSwrQkFBOEI7QUFDOUIsaUVBQStEO0FBRS9ELElBQUksT0FBb0IsQ0FBQztBQUV6QixvQkFBUyxDQUFDLEdBQUcsRUFBRTtJQUNiLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEdBQUcsRUFBRTtJQUNWLE9BQU8sR0FBRyxJQUFJLHdCQUFXLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFPLEdBQVcsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FDRiw4Q0FBOEMsRUFDOUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ2xCLENBQU8sU0FBaUIsRUFBRSxFQUFFO0lBQzFCLGFBQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ3BGLENBQUMsQ0FBQSxDQUNGLENBQUM7QUFFRixlQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBTyxRQUFnQixFQUFFLEVBQUU7SUFDaEUsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBTyxHQUFXLEVBQUUsRUFBRTtJQUM1RSxhQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRSxDQUFPLE1BQWMsRUFBRSxFQUFFO0lBQ2xFLGFBQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEYsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFPLFFBQWdCLEVBQUUsRUFBRTtJQUM5RCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBTyxHQUFXLEVBQUUsRUFBRTtJQUN6RSxNQUFNLElBQUksR0FBRyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNqRCxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQU8sSUFBWSxFQUFFLEVBQUU7SUFDeEYsYUFBTSxDQUNKLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ3RCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUNULENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDZixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=