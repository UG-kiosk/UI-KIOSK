import { LoginPageTestFunctions } from '../../utils/AdminPanel/LoginPageTestFunctions';

describe('LoginPage.cy.tsx', () => {
  it('test admin login page', function () {
    cy.visit('/admin-panel/login');
    const test = new LoginPageTestFunctions();
    test.getAdminLoginForm();
  });
});
