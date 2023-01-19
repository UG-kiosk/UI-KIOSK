export class NavbarTestFunctions {
  getNavbar = () => cy.getBySelector('navbar');

  getLeftNavigation = () => cy.getBySelector('nav-back');

  getHomeNavigation = () => cy.getBySelector('nav-home');

  getRightNavigation = () => cy.getBySelector('nav-forward');

  getIcons = () => cy.getBySelector('nav-icon');

  testNavbarContent = () => {
    this.getNavbar().should('exist');
    this.getLeftNavigation().should('exist');
    this.getHomeNavigation().should('exist');
    this.getRightNavigation().should('exist');
    this.getIcons().should('have.length', 3);

    this.getHomeNavigation().click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/');
    });
  };
}
