describe('Root.cy.tsc', () => {
  it('helo world', () => {
    cy.visit('/');
    cy.contains('p', 'Hello World');
  });
});
