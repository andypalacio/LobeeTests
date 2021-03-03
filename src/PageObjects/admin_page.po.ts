import { element, by } from 'protractor';

export class AdminPage {
  headerItem(tabName: string) {
    return element(by.cssContainingText('.item', tabName));
  }

  headerOpt(optName: string) {
    return element(by.linkText(optName));
  }
}
