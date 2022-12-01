Cypress.Commands.add('getBySelector', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
