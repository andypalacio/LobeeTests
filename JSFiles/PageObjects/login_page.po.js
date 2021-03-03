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
        return protractor_1.element(protractor_1.by.cssContainingText(".Button", btnLabel));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fcGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL2xvZ2luX3BhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQStDO0FBRS9DLE1BQWEsU0FBUztJQUNsQixVQUFVLENBQUMsTUFBYztRQUNyQixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBYztRQUN0QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxxSkFBcUo7SUFDckosZUFBZSxDQUFDLFFBQWdCO1FBQzVCLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUVKO0FBZEQsOEJBY0MifQ==