import { browser } from 'protractor';
import { When, Before, BeforeAll } from '@cucumber/cucumber';
import { LoginPage } from '../../src/PageObjects/login_page.po';

let loginPage: LoginPage;

BeforeAll(() => {
  browser.waitForAngularEnabled(false);
});

Before(() => {
  loginPage = new LoginPage();
});

When(
  'I enter {string} on the {string} field on the Sign in side',
  { timeout: 5000 },
  async (value: string, field: string) => {
    await browser.wait(loginPage.signInInput(field).sendKeys(value));
  }
);

When('I click on the {string} button on the Sign in side', async (btnlabel: string) => {
  await loginPage.loginPageButton(btnlabel).click();
});
