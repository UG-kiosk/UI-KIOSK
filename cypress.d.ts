import { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      getBySelector(selector, ...args): typeof getBySelector;
    }
  }
}
