import { HeaderTestFunctions } from '../../utils/Header/HeaderTestFunctions';
import { LoginPageTestFunctions } from '../../utils/AdminPanel/LoginPageTestFunctions';
import { LoginFormFieldsNames } from '../../../src/AdminPanel/modules/LoginPage/LoginPageForm/types';

const Header = new HeaderTestFunctions();
const LoginPageTests = new LoginPageTestFunctions();

describe('LoginPage.cy.tsx', () => {
  beforeEach(() => {
    cy.visit('/admin-panel/login');
  });

  it.only('Render Header', () => {
    Header.testHeaderContent();
  });

  it.only('Login page content test', () => {
    LoginPageTests.testLoginPageContent();
  });

  it.only('Submit correct data', () => {
    LoginPageTests.typeToLogin('admin');
    LoginPageTests.typeToPassword('admin');

    LoginPageTests.submitForm();

    cy.on('window:alert', str => {
      expect(str).to.equal(
        JSON.stringify({ [LoginFormFieldsNames.USERNAME]: 'admin', [LoginFormFieldsNames.PASSWORD]: 'admin' }),
      );
    });
  });

  it.only('Type empty login', () => {
    LoginPageTests.getLoginError().should('not.exist');
    LoginPageTests.getPasswordError().should('not.exist');

    LoginPageTests.getLoginInput().focus().blur();

    LoginPageTests.getLoginError().should('exist');
    LoginPageTests.getPasswordError().should('not.exist');
  });

  it.only('Type empty password', () => {
    LoginPageTests.getLoginError().should('not.exist');
    LoginPageTests.getPasswordError().should('not.exist');

    LoginPageTests.getPasswordInput().focus().blur();

    LoginPageTests.getLoginError().should('not.exist');
    LoginPageTests.getPasswordError().should('exist');
  });

  it.only('Submit empty data', () => {
    LoginPageTests.getLoginError().should('not.exist');
    LoginPageTests.getPasswordError().should('not.exist');

    LoginPageTests.submitForm();

    LoginPageTests.getLoginError().should('exist');
    LoginPageTests.getPasswordError().should('exist');
  });

  it.only('Errors disappear after correct data', () => {
    LoginPageTests.submitForm();

    LoginPageTests.getLoginError().should('exist');
    LoginPageTests.getPasswordError().should('exist');

    LoginPageTests.typeToLogin('a');
    LoginPageTests.getLoginError().should('not.exist');

    LoginPageTests.typeToPassword('a');
    LoginPageTests.getPasswordError().should('not.exist');
  });
});
