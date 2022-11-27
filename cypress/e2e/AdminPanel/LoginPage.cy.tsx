describe('LoginPage.cy.tsx', () => {
  it('test admin login page', () => {
    cy.visit('/admin-panel/login');
    cy.get('[data-cy="LoginPageDiv"]').contains('Login page');
  });
});
