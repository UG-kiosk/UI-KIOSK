import { LoginPageTestFunctions } from '../../utils/AdminPanel/LoginPageTestFunctions';

const LoginPageTests = new LoginPageTestFunctions();

describe('LoginPage.cy.tsx', () => {
  it('test admin login page', () => {
    cy.visit('/admin-panel/login');
    LoginPageTests.getAdminLoginForm();
  });
});
