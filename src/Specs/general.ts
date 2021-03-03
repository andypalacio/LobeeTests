import { browser } from 'protractor';
import { When, Then, Before, BeforeAll } from '@cucumber/cucumber';
import { expect } from 'chai';
import { GenericPage } from '../../src/PageObjects/generic.po';

let generic: GenericPage;

BeforeAll(() => {
  browser.waitForAngularEnabled(false);
});

Before(() => {
  generic = new GenericPage();
});

When('I navigate to {string}', { timeout: 50000 }, async (URL: string) => {
  await browser.get(URL);
});

Then(
  'the page is loaded showing the text {string}',
  { timeout: 50000 },
  async (subtittle: string) => {
    expect(await browser.wait(generic.genericText(subtittle).isPresent())).to.be.true;
  }
);

When('I click on the {string} button', async (btnlabel: string) => {
  await generic.genericButton(btnlabel).click();
});

When('I am redirected to {string}', { timeout: 50000 }, async (url: string) => {
  expect(await generic.urlChangedTo(url)).to.be.true;
});

When('the focus is on the {string} field', async (string: string) => {
  expect(await generic.focusedInput().getAttribute('placeholder')).equals(string);
});

When('I click on the {string} link', async (linktext: string) => {
  await browser.wait(generic.link(linktext).isPresent(), 5000);
  await generic.link(linktext).click();
});

Then('The page {string} is open', { timeout: 5000 }, async (url: string) => {
  const tabs = await browser.getAllWindowHandles();
  browser.switchTo().window(tabs[1]);
  const tabURL = await browser.getCurrentUrl();
  await browser.driver.close();
  browser.switchTo().window(tabs[0]);
  expect(tabURL).to.equal(url);
});

Then('The error message {string} is displayed', { timeout: 5000 }, async (mesg: string) => {
  expect(
    await browser.wait(() => {
      let comp = generic.errorMessage(mesg);
      return comp.isPresent();
    }, 5000)
  ).to.be.true;
});
