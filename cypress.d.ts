declare global {
  namespace Cypress {
    interface Chainable {
      getBySelector(selector, ...args): typeof getBySelector;
    }
  }
}
