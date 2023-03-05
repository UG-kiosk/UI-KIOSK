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
    this.getTile().eq(3).should('have.text', 'skład osobowy');
    this.getTile().eq(3).getBySelector('people-alt-icon').should('exist');
  };

  testMainPanelContentEN = () => {
    this.testMainPanelContent();
    this.getTile().eq(1).should('have.text', 'majors');
    this.getTile().eq(3).should('have.text', 'faculty members');
    this.getTile().eq(3).getBySelector('people-alt-icon').should('exist');
  };

  testOnClickNavigations = () => {
    this.getTile().eq(1).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/majors');
    });

    cy.go('back');

    this.getTile().eq(3).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/staff');
    });
  };
}
