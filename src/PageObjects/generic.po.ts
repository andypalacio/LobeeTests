import { browser, element, by } from 'protractor';

export class GenericPage {
  urlChangedTo(newUrl: string, timeout: number = 3000) {
    return browser.driver.wait(() => {
      return browser.driver.getCurrentUrl().then(url => {
        return url.includes(newUrl);
      });
    }, timeout);
  }

  genericButton(btnLabel: string) {
    return element(by.cssContainingText('.button', btnLabel));
  }

  secondaryButton(btnLabel: string) {
    return element(by.cssContainingText('.button', btnLabel));
  }

  genericText(caption: string) {
    return element(by.cssContainingText('*', caption));
  }

  focusedInput() {
    return element(by.css('input:focus'));
  }

  errorMessage(message: string) {
    return element(by.cssContainingText('.Error', message));
  }

  link(text: string) {
    return element(by.linkText(text));
  }
}
