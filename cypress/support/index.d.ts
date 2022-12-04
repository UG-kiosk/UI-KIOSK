declare namespace Cypress {
  interface Chainable {
    getBySelector(selector: string, ...args: any[]): typeof getBySelector;
  }
}
