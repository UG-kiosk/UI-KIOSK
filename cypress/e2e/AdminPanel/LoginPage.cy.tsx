import { HeaderTestFunctions } from '../../utils/Header/HeaderTestFunctions';
import { LoginPageTestFunctions } from '../../utils/AdminPanel/LoginPageTestFunctions';

const HeaderTests = new HeaderTestFunctions();
const LoginPageTests = new LoginPageTestFunctions();

describe('LoginPage.cy.tsx', () => {
  beforeEach(() => {
    cy.visit('/admin-panel/login');
  });

  it.only('Render Header PL', () => {
    HeaderTests.testHeaderContentPL();
  });

  it.only('Render Header EN', () => {
    HeaderTests.testHeaderContentEN();
  });

  it.only('Login page content PL', () => {
    LoginPageTests.testLoginPageContentPL();
  });

  it.only('Login page content EN', () => {
    LoginPageTests.testLoginPageContentEN();
  });

  it.only('Submit correct data', () => {
    LoginPageTests.submitCorrectData();
  });

  it.only('Type empty login PL', () => {
    LoginPageTests.emptyLoginErrorPL();
  });

  it.only('Type empty login EN', () => {
    LoginPageTests.emptyLoginErrorEN();
  });

  it.only('Type empty password PL', () => {
    LoginPageTests.emptyPasswordErrorPL();
  });

  it.only('Type empty password EN', () => {
    LoginPageTests.emptyPasswordErrorEN();
  });

  it.only('Submit empty data PL', () => {
    LoginPageTests.submitEmptyDataPL();
  });

  it.only('Submit empty data EN', () => {
    LoginPageTests.submitEmptyDataEN();
  });

  it.only('Errors disappear after submitting correct data', () => {
    LoginPageTests.disappearErrorsAfterCorrectData();
  });
});
