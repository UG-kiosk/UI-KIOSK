describe('Root.cy.tsc', () => {
  it('helo world', function () {
    cy.visit('/');
    cy.getBySelector('hello-world-p').contains('Hello World');
  });
});
