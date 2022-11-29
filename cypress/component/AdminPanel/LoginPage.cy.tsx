import { LoginFormFieldsNames } from '../../../src/AdminPanel/modules/LoginPage/types';
import { LoginPage } from '../../../src/AdminPanel/modules/LoginPage';
import { LoginPageTestFunctions } from '../../utils/AdminPanel/LoginPageTestFunctions';

const LoginPageTests = new LoginPageTestFunctions();

describe('LoginPage.tsx', () => {
  beforeEach(() => {
    cy.mount(<LoginPage />);
  });

  it.only('Login page content test', () => {
    LoginPageTests.testLoginPageContent();
  });

  it.only('Submit correct data', () => {
    LoginPageTests.typeToUsername('admin');
    LoginPageTests.typeToPassword('admin');

    LoginPageTests.submitForm();

    cy.on('window:alert', str => {
      expect(str).to.equal(
        JSON.stringify({ [LoginFormFieldsNames.USERNAME]: 'admin', [LoginFormFieldsNames.PASSWORD]: 'admin' }),
      );
    });
  });

  it.only('Type empty login', () => {
    LoginPageTests.getUsernameError().should('not.exist');
    LoginPageTests.getPasswordError().should('not.exist');

    LoginPageTests.getUsernameInput().focus().blur();

    LoginPageTests.getUsernameError().should('exist');
    LoginPageTests.getPasswordError().should('not.exist');
  });

  it.only('Type empty password', () => {
    LoginPageTests.getUsernameError().should('not.exist');
    LoginPageTests.getPasswordError().should('not.exist');

    LoginPageTests.getPasswordInput().focus().blur();

    LoginPageTests.getUsernameError().should('not.exist');
    LoginPageTests.getPasswordError().should('exist');
  });

  it.only('Submit empty data', () => {
    LoginPageTests.getUsernameError().should('not.exist');
    LoginPageTests.getPasswordError().should('not.exist');

    LoginPageTests.submitForm();

    LoginPageTests.getUsernameError().should('exist');
    LoginPageTests.getPasswordError().should('exist');
  });

  it.only('Errors disappear after correct data', () => {
    LoginPageTests.submitForm();

    LoginPageTests.getUsernameError().should('exist');
    LoginPageTests.getPasswordError().should('exist');

    LoginPageTests.typeToUsername('a');
    LoginPageTests.getUsernameError().should('not.exist');

    LoginPageTests.typeToPassword('a');
    LoginPageTests.getPasswordError().should('not.exist');
  });
});
