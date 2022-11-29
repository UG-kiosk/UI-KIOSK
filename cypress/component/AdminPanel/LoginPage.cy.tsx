import { LoginFormFieldsNames } from '../../../src/AdminPanel/modules/LoginPage/types';
import { LoginPage } from '../../../src/AdminPanel/modules/LoginPage';
import { LoginPageTestFunctions } from '../../utils/AdminPanel/LoginPageTestFunctions';

describe('LoginPage.tsx', () => {
  beforeEach(function () {
    cy.mount(<LoginPage />);
    cy.wrap(new LoginPageTestFunctions()).as('tests');
  });

  it.only('Login page content test', function () {
    this.tests.testLoginPageContent();
  });

  it.only('Submit correct data', function () {
    this.tests.typeToUsername('admin');
    this.tests.typeToPassword('admin');

    this.tests.submitForm();

    cy.on('window:alert', str => {
      expect(str).to.equal(
        JSON.stringify({ [LoginFormFieldsNames.USERNAME]: 'admin', [LoginFormFieldsNames.PASSWORD]: 'admin' }),
      );
    });
  });

  it.only('Type empty login', function () {
    this.tests.getUsernameError().should('not.exist');
    this.tests.getPasswordError().should('not.exist');

    this.tests.getUsernameInput().focus().blur();

    this.tests.getUsernameError().should('exist');
    this.tests.getPasswordError().should('not.exist');
  });

  it.only('Type empty password', function () {
    this.tests.getUsernameError().should('not.exist');
    this.tests.getPasswordError().should('not.exist');

    this.tests.getPasswordInput().focus().blur();

    this.tests.getUsernameError().should('not.exist');
    this.tests.getPasswordError().should('exist');
  });

  it.only('Submit empty data', function () {
    this.tests.getUsernameError().should('not.exist');
    this.tests.getPasswordError().should('not.exist');

    this.tests.submitForm();

    this.tests.getUsernameError().should('exist');
    this.tests.getPasswordError().should('exist');
  });

  it.only('Errors disappear after correct data', function () {
    this.tests.submitForm();

    this.tests.getUsernameError().should('exist');
    this.tests.getPasswordError().should('exist');

    this.tests.typeToUsername('a');
    this.tests.getUsernameError().should('not.exist');

    this.tests.typeToPassword('a');
    this.tests.getPasswordError().should('not.exist');
  });
});
