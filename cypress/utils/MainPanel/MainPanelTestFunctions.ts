export class MainPanelTestFunctions {
  private getMainPanel = () => cy.getBySelector('main-panel');

  private getTile = () => cy.getBySelector('tile');

  private testMainPanelContent = () => {
    this.getMainPanel().should('exist');
    this.getTile().should('have.length', 7);
  };

  testMainPanelContentPL = () => {
    this.testMainPanelContent();
    this.getTile().eq(1).should('have.text', 'kierunki studiów');
  };

  testMainPanelContentEN = () => {
    this.testMainPanelContent();
    this.getTile().eq(1).should('have.text', 'majors');
  };

  testOnClickNavigations = () => {
    this.getTile().eq(1).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/majors');
    });
  };
}
