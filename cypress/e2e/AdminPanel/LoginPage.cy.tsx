describe('LoginPage.cy.tsx', () => {
  it('test admin login page', () => {
    cy.visit('/admin-panel/login');
    cy.getBySelector('admin-login-form');
  });
});
