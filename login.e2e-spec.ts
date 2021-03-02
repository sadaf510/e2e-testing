import { LoginPage } from './login.po';

// tslint:disable-next-line:only-arrow-functions
describe('CloudApp : Login', function() {


// tslint:disable-next-line:no-unused-expression
it ('should display login page', () => {
      const loginPage = new LoginPage();
      loginPage.navigateToHomePage();
      const headerText = loginPage.getHeadingLogin();
      expect(headerText).toEqual('Sign In');
});


it ('should login user when valid username and password is entered', () => {
  const loginPage = new LoginPage();
  loginPage.navigateToHomePage();
  loginPage.login('e2etestcarrier', 'FleetHawks@2502');

});
it ('should display error message when invalid data entered', () => {
  const loginPage = new LoginPage();
  loginPage.navigateToHomePage();
  loginPage.login('InvalidUserName', 'InvalidPassword');
  const errorText = loginPage.getErrorText();
  expect(errorText).toEqual('Incorrect Username or Password');

});

});
