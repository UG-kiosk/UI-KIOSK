import { LoginPage } from '../../../src/AdminPanel/modules/LoginPage';

describe('LoginPage.tsx', () => {
  it('Login page content test', () => {
    cy.mount(<LoginPage />);
    cy.contains('div', 'Login page');
  });
});
