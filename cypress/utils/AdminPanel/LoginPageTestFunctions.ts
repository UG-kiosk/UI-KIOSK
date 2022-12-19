import { LoginFormFieldsNames } from 'src/AdminPanel/modules/LoginPage/LoginPageForm/types';
import { LanguageChangeTestFunctions } from '../LanguageChange/LanguageChangeTestFunctions';

const LanguageChange = new LanguageChangeTestFunctions();

export class LoginPageTestFunctions {
  getAdminLoginForm = () => cy.getBySelector('admin-login-form');

  getLoginLabel = () => cy.getBySelector('username-label');

  getLoginInput = () => cy.getBySelector('username-input');

  getLoginError = () => cy.getBySelector('username-error');

  getPasswordLabel = () => cy.getBySelector('password-label');

  getPasswordInput = () => cy.getBySelector('password-input');

  getPasswordError = () => cy.getBySelector('password-error');

  getLoginButton = () => cy.getBySelector('login-button');

  typeToLogin = (login: string) => this.getLoginInput().type(login);

  typeToPassword = (password: string) => this.getPasswordInput().type(password);

  submitForm = () => this.getLoginButton().click();

  private testLoginPageContent = () => {
    this.getAdminLoginForm().should('exist');
    this.getLoginLabel().should('exist');
    this.getLoginInput().should('exist');
    this.getLoginError().should('not.exist');
    this.getPasswordLabel().should('exist');
    this.getPasswordInput().should('exist');
    this.getPasswordError().should('not.exist');
    this.getLoginButton().should('exist');
  };

  testLoginPageContentPL = () => {
    this.testLoginPageContent();
    this.getLoginLabel().should('have.text', 'login');
    this.getPasswordLabel().should('have.text', 'hasło');
    this.getLoginButton().should('have.text', 'zaloguj się');
  };

  testLoginPageContentEN = () => {
    this.testLoginPageContent();
    LanguageChange.changeLanguage();
    this.getLoginLabel().should('have.text', 'login');
    this.getPasswordLabel().should('have.text', 'password');
    this.getLoginButton().should('have.text', 'log in');
  };

  submitCorrectData = () => {
    this.typeToLogin('admin');
    this.typeToPassword('admin');

    this.submitForm();

    cy.on('window:alert', str => {
      expect(str).to.equal(
        JSON.stringify({ [LoginFormFieldsNames.USERNAME]: 'admin', [LoginFormFieldsNames.PASSWORD]: 'admin' }),
      );
    });
  };

  emptyLoginErrorPL = () => {
    this.getLoginInput().focus().blur();
    this.getLoginError().should('exist');
    this.getPasswordError().should('not.exist');
    this.getLoginError().should('have.text', 'Login jest wymagane');
  };

  emptyLoginErrorEN = () => {
    LanguageChange.changeLanguage();
    this.getLoginInput().focus().blur();
    this.getLoginError().should('exist');
    this.getPasswordError().should('not.exist');
    this.getLoginError().should('have.text', 'Username is required');
  };

  emptyPasswordErrorPL = () => {
    this.getPasswordInput().focus().blur();
    this.getLoginError().should('not.exist');
    this.getPasswordError().should('exist');
    this.getPasswordError().should('have.text', 'Hasło jest wymagane');
  };

  emptyPasswordErrorEN = () => {
    LanguageChange.changeLanguage();
    this.getPasswordInput().focus().blur();
    this.getLoginError().should('not.exist');
    this.getPasswordError().should('exist');
    this.getPasswordError().should('have.text', 'Password is required');
  };

  private submitEmptyData = () => {
    this.submitForm();
    this.getLoginError().should('exist');
    this.getPasswordError().should('exist');
  };

  submitEmptyDataPL = () => {
    this.submitEmptyData();
    this.getLoginError().should('have.text', 'Login jest wymagane');
    this.getPasswordError().should('have.text', 'Hasło jest wymagane');
  };

  submitEmptyDataEN = () => {
    LanguageChange.changeLanguage();
    this.submitEmptyData();
    this.getLoginError().should('have.text', 'Username is required');
    this.getPasswordError().should('have.text', 'Password is required');
  };

  disappearErrorsAfterCorrectData = () => {
    this.submitEmptyData();
    this.typeToLogin('admin');
    this.typeToPassword('password');
    this.getLoginError().should('not.exist');
    this.getPasswordError().should('not.exist');
  };
}
