describe('App.cy.ts', () => {
  it('hello world', () => {
    // cy.mount(<App/>)
    cy.contains('p', 'Hello World')
  })
})