import { browser, element, by } from 'protractor';
import { When, Then, Before, BeforeAll } from '@cucumber/cucumber';
import { expect } from 'chai';
import { LoginPage } from '../../src/PageObjects/login_page.po';
import { GenericPage } from '../../src/PageObjects/generic.po';
import { AdminPage } from '../../src/PageObjects/admin_page.po';
import config from '../config';

let loginPage: LoginPage;
let generic: GenericPage;
let adminPage: AdminPage;

BeforeAll(() => {
  browser.waitForAngularEnabled(false);
});

Before(() => {
  loginPage = new LoginPage();
  generic = new GenericPage();
  adminPage = new AdminPage();
});

When(
  'I enter {string} on the {string} field on the login side',
  { timeout: 5000 },
  async (value: string, field: string) => {
    await browser.wait(loginPage.loginInput(field).sendKeys(value));
  }
);

When('I click on the {string} button on the login side', async (btnlabel: string) => {
  await loginPage.loginPageButton(btnlabel).click();
});

Then('I am successfully logged in', async () => {
  expect(await generic.urlChangedTo(`${config.admin.baseUrl}/stays`)).to.be.true;
  //expect(await browser.wait(adminPage.headerItem("Stays").isPresent())).to.be.true;
  await adminPage.headerItem('...').click();
  await browser.wait(adminPage.headerOpt('Log out').isPresent());
  await adminPage.headerOpt('Log out').click();
});
