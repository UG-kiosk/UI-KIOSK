describe('Root.cy.tsc', () => {
  it('helo world', () => {
    cy.visit('/');
    cy.get('[data-cy="HelloWorld"]').contains('Hello World');
  });
});
