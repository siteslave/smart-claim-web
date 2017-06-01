import { browser, element, by } from 'protractor';

export class WebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sc-root h1')).getText();
  }
}
