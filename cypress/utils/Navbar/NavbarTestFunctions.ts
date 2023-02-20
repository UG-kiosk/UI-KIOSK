export class NavbarTestFunctions {
  private getNavbar = () => cy.getBySelector('navbar');
  private getLeftNavigation = () => cy.getBySelector('nav-back');
  private getHomeNavigation = () => cy.getBySelector('nav-home');
  private getRightNavigation = () => cy.getBySelector('nav-forward');
  private getIcons = () => cy.getBySelector('nav-icon');

  private getTile = () => cy.getBySelector('tile');

  testNavbarContent = () => {
    this.getNavbar().should('exist');
    this.getLeftNavigation().should('exist');
    this.getHomeNavigation().should('exist');
    this.getRightNavigation().should('exist');
    this.getIcons().should('have.length', 3);
  };

  testNavbarNavigationToHome = () => {
    this.getTile().eq(3).click();
    this.getHomeNavigation().click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/');
    });
  };

  testNavbarNavigationBack = () => {
    this.getTile().eq(3).click();
    this.getLeftNavigation().click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/');
    });
  };

  testNavbarNavigationForward = () => {
    this.getTile().eq(3).click();
    cy.go('back');
    this.getRightNavigation().click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/staff');
    });
  };
}
