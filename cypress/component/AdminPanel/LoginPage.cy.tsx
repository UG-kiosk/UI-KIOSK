import { LoginFormFieldsNames } from '../../../src/AdminPanel/modules/LoginPage/types';
import { LoginPage } from '../../../src/AdminPanel/modules/LoginPage';

describe('LoginPage.tsx', () => {
  beforeEach(() => {
    cy.mount(<LoginPage />);
  });

  it.only('Login page content test', () => {
    cy.getBySelector('admin-login-form').should('exist');
    cy.getBySelector('username-label').should('exist').contains('Username:');
    cy.getBySelector('username-input').should('exist');
    cy.getBySelector('username-error').should('not.exist');
    cy.getBySelector('password-label').should('exist').contains('Password:');
    cy.getBySelector('password-input').should('exist');
    cy.getBySelector('password-error').should('not.exist');
    cy.getBySelector('login-button').should('exist');
  });

  it.only('Submit correct data', () => {
    cy.getBySelector('username-input').type('admin');
    cy.getBySelector('password-input').type('admin');

    cy.getBySelector('login-button').click();

    cy.on('window:alert', str => {
      expect(str).to.equal(
        JSON.stringify({ [LoginFormFieldsNames.USERNAME]: 'admin', [LoginFormFieldsNames.PASSWORD]: 'admin' }),
      );
    });
  });

  it.only('Type empty login', () => {
    cy.getBySelector('username-error').should('not.exist');
    cy.getBySelector('password-error').should('not.exist');

    cy.getBySelector('username-input').focus().blur();

    cy.getBySelector('username-error').should('exist');
    cy.getBySelector('password-error').should('not.exist');
  });

  it.only('Type empty password', () => {
    cy.getBySelector('username-error').should('not.exist');
    cy.getBySelector('password-error').should('not.exist');

    cy.getBySelector('password-input').focus().blur();

    cy.getBySelector('username-error').should('not.exist');
    cy.getBySelector('password-error').should('exist');
  });

  it.only('Submit empty data', () => {
    cy.getBySelector('username-error').should('not.exist');
    cy.getBySelector('password-error').should('not.exist');

    cy.getBySelector('login-button').click();

    cy.getBySelector('username-error').should('exist');
    cy.getBySelector('password-error').should('exist');
  });

  it.only('Errors disappear after correct data', () => {
    cy.getBySelector('login-button').click();

    cy.getBySelector('username-error').should('exist');
    cy.getBySelector('password-error').should('exist');

    cy.getBySelector('username-input').type('a');
    cy.getBySelector('username-error').should('not.exist');

    cy.getBySelector('password-input').type('a');
    cy.getBySelector('password-error').should('not.exist');
  });
});
