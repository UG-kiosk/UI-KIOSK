import { HeaderTestFunctions } from '../../utils/Header/HeaderTestFunctions';
import { LoginPageTestFunctions } from '../../utils/AdminPanel/LoginPageTestFunctions';

const Header = new HeaderTestFunctions();
const LoginPage = new LoginPageTestFunctions();

describe('LoginPage.cy.tsx', () => {
  beforeEach(() => {
    cy.visit('/admin-panel/login');
  });

  it.only('Render Header PL', () => {
    Header.testHeaderContentPL();
  });

  it.only('Render Header EN', () => {
    Header.testHeaderContentEN();
  });

  it.only('Login page content PL', () => {
    LoginPage.testLoginPageContentPL();
  });

  it.only('Login page content EN', () => {
    LoginPage.testLoginPageContentEN();
  });

  it.only('Submit correct data', () => {
    LoginPage.submitCorrectData();
  });

  it.only('Type empty login PL', () => {
    LoginPage.emptyLoginErrorPL();
  });

  it.only('Type empty login EN', () => {
    LoginPage.emptyLoginErrorEN();
  });

  it.only('Type empty password PL', () => {
    LoginPage.emptyPasswordErrorPL();
  });

  it.only('Type empty password EN', () => {
    LoginPage.emptyPasswordErrorEN();
  });

  it.only('Submit empty data PL', () => {
    LoginPage.submitEmptyDataPL();
  });

  it.only('Submit empty data EN', () => {
    LoginPage.submitEmptyDataEN();
  });

  it.only('Errors disappear after submitting correct data', () => {
    LoginPage.disappearErrorsAfterCorrectData();
  });
});
