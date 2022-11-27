describe('WrongPath.cy.tsx', () => {
  it('Test wrong path', () => {
    cy.visit('/wrong_path');
    cy.get('[data-cy="ErrorDiv"]').contains('Error: wrong path: /wrong_path');
  });
});
