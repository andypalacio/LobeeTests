"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPage = void 0;
const protractor_1 = require("protractor");
class GenericPage {
    urlChangedTo(newUrl, timeout = 3000) {
        return protractor_1.browser.driver.wait(() => {
            return protractor_1.browser.driver.getCurrentUrl().then(url => {
                return url.includes(newUrl);
            });
        }, timeout);
    }
    genericButton(btnLabel) {
        return protractor_1.element(protractor_1.by.cssContainingText('.button', btnLabel));
    }
    secondaryButton(btnLabel) {
        return protractor_1.element(protractor_1.by.cssContainingText('.button', btnLabel));
    }
    genericText(caption) {
        return protractor_1.element(protractor_1.by.cssContainingText('*', caption));
    }
    focusedInput() {
        return protractor_1.element(protractor_1.by.css('input:focus'));
    }
    errorMessage(message) {
        return protractor_1.element(protractor_1.by.cssContainingText('.Error', message));
    }
    link(text) {
        return protractor_1.element(protractor_1.by.linkText(text));
    }
}
exports.GenericPage = GenericPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9QYWdlT2JqZWN0cy9nZW5lcmljLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFrRDtBQUVsRCxNQUFhLFdBQVc7SUFDdEIsWUFBWSxDQUFDLE1BQWMsRUFBRSxVQUFrQixJQUFJO1FBQ2pELE9BQU8sb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM5QixPQUFPLG9CQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0MsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFnQjtRQUM1QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxlQUFlLENBQUMsUUFBZ0I7UUFDOUIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWU7UUFDekIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFlO1FBQzFCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZO1FBQ2YsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFoQ0Qsa0NBZ0NDIn0=