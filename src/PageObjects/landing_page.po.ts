import { element, by } from 'protractor';

export class LandingPage {
  secondaryButton(btnLabel: string) {
    return element(by.cssContainingText('.button', btnLabel));
  }

  homeSignInButton(btnLabel: string) {
    return element(by.css('.Home')).element(by.cssContainingText('.button', btnLabel));
  }

  headerSignInButton(btnLabel: string) {
    return element(by.css('.Header')).element(by.cssContainingText('.button', btnLabel));
  }
}
