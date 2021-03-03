"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
class LoginPage {
    loginInput(placeh) {
        return protractor_1.element(protractor_1.by.css('.right')).element(protractor_1.by.css('[placeholder="' + placeh + '"]'));
    }
    signInInput(placeh) {
        return protractor_1.element(protractor_1.by.css('.left')).element(protractor_1.by.css('[placeholder="' + placeh + '"]'));
    }
    //esto no deberia existir, aca se deberia usar el genericButton, pero la clase esta mal, en el loguin la clase es .Button, y en la landing es .button
    loginPageButton(btnLabel) {
        return protractor_1.element(protractor_1.by.cssContainingText('.Button', btnLabel));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fcGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9QYWdlT2JqZWN0cy9sb2dpbl9wYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5QztBQUV6QyxNQUFhLFNBQVM7SUFDcEIsVUFBVSxDQUFDLE1BQWM7UUFDdkIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWM7UUFDeEIsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQscUpBQXFKO0lBQ3JKLGVBQWUsQ0FBQyxRQUFnQjtRQUM5QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRjtBQWJELDhCQWFDIn0=