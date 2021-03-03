import { browser } from 'protractor';
import { When, Before, BeforeAll } from '@cucumber/cucumber';
import { LandingPage } from '../../src/PageObjects/landing_page.po';

let landingPage: LandingPage;

BeforeAll(() => {
  browser.waitForAngularEnabled(false);
});

Before(() => {
  landingPage = new LandingPage();
});

When('I click on the {string} button on the header', async (btnlabel: string) => {
  await landingPage.headerSignInButton(btnlabel).click();
});

When('I click on the {string} button on the home', async (btnlabel: string) => {
  await landingPage.homeSignInButton(btnlabel).click();
});

When('I click on the {string} secondary button', async (btnlabel: string) => {
  await landingPage.secondaryButton(btnlabel).click();
});
