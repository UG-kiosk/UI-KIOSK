describe('Root.cy.tsc', () => {
  it('helo world', () => {
    cy.visit('/');
    cy.getBySelector('hello-world-p').contains('Hello World');
  });
});
