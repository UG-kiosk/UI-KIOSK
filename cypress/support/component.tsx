import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('getBySelector', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
