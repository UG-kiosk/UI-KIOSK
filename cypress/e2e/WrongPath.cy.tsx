describe('WrongPath.cy.tsx', () => {
  it('Test wrong path', () => {
    cy.visit('/wrong_path');
    cy.contains('div', 'Error: wrong path: /wrong_path');
  });
});
