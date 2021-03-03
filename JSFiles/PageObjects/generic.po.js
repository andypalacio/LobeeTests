"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPage = void 0;
const protractor_1 = require("protractor");
class GenericPage {
    urlChangedTo(newUrl, timeout = 3000) {
        return protractor_1.browser.driver.wait(() => {
            return protractor_1.browser.driver.getCurrentUrl().then((url) => {
                return url.includes(newUrl);
            });
        }, timeout);
    }
    genericButton(btnLabel) {
        return protractor_1.element(protractor_1.by.cssContainingText(".button", btnLabel));
    }
    secondaryButton(btnLabel) {
        return protractor_1.element(protractor_1.by.cssContainingText(".button", btnLabel));
    }
    genericText(caption) {
        return protractor_1.element(protractor_1.by.cssContainingText("*", caption));
    }
    focusedInput() {
        return protractor_1.element(protractor_1.by.css("input:focus"));
    }
    errorMessage(message) {
        return protractor_1.element(protractor_1.by.cssContainingText(".Error", message));
    }
    link(text) {
        return protractor_1.element(protractor_1.by.linkText(text));
    }
}
exports.GenericPage = GenericPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL2dlbmVyaWMucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQStDO0FBRS9DLE1BQWEsV0FBVztJQUNwQixZQUFZLENBQUMsTUFBYyxFQUFFLFVBQWtCLElBQUk7UUFDL0MsT0FBTyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsR0FBRyxFQUFFO1lBQzdCLE9BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hELE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBSUQsYUFBYSxDQUFDLFFBQWdCO1FBQzFCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGVBQWUsQ0FBQyxRQUFnQjtRQUM1QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBZTtRQUN2QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUUxQyxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWU7UUFDeEIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDYixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQW5DRCxrQ0FtQ0MifQ==