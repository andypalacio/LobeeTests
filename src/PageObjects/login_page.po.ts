import { element, by } from 'protractor';

export class LoginPage {
  loginInput(placeh: string) {
    return element(by.css('.right')).element(by.css('[placeholder="' + placeh + '"]'));
  }

  signInInput(placeh: string) {
    return element(by.css('.left')).element(by.css('[placeholder="' + placeh + '"]'));
  }

  //esto no deberia existir, aca se deberia usar el genericButton, pero la clase esta mal, en el loguin la clase es .Button, y en la landing es .button
  loginPageButton(btnLabel: string) {
    return element(by.cssContainingText('.Button', btnLabel));
  }
}
