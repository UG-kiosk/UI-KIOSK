import App from '../../src/App';

describe('App.cy.ts', () => {
  it('hello world', () => {
    cy.mount(<App />);
    cy.getBySelector('hello-world-p').contains('Hello World');
  });
});
