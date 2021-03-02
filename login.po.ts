import { browser, element , by } from 'protractor';


export class LoginPage {

  navigateToHomePage() {
    return browser.get('/');
  }

  getHeadingLogin() {
    element(by.name('LoginTitle')).getText();
  }


  login(userName, password)  {

    const userNameElement = element(by.name('username'));
    const passwordElement = element(by.name('pwd'));
    userNameElement.sendKeys(userName);
    passwordElement.sendKeys(password);

    const submitElement = element(by.id('btnSubmit'));
    submitElement.click();

  }
  getErrorText(){
     return element(by.id("errorText")).getText();
  }
  getDashBoardText() {
     element(by.name('LoginTitle')).getText();
  }
}
