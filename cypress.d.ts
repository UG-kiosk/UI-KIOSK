import { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      getBySelector(selector, ...args): typeof getBySelector;
    }
  }
}
