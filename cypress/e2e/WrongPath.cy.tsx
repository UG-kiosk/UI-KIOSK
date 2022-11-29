describe('WrongPath.cy.tsx', () => {
  it('Test wrong path', function () {
    cy.visit('/wrong_path');
    cy.getBySelector('error-div').contains('Error: wrong path: /wrong_path');
  });
});
