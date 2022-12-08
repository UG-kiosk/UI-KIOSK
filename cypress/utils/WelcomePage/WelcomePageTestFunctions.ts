export class WelcomePageTestFunctions {
  getWelcomePage = () => cy.getBySelector('welcome-page');

  getTitle = () => cy.getBySelector('welcome-page-title');

  getButton = () => cy.getBySelector('welcome-page-button');

  getImage = () => cy.getBySelector('welcome-page-img');

  showMain = () => this.getButton().click();

  testWelcomePageContent = () => {
    this.getWelcomePage().should('exist');
    this.getTitle().contains('Instytut Informatyki');
    this.getButton().contains('Dotknij Tutaj');
    this.getImage().should('exist');
  };
}
