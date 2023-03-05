import { LanguageChangeTestFunctions } from './../LanguageChange/LanguageChangeTestFunctions';

const LanguageChange = new LanguageChangeTestFunctions();

export class WelcomePageTestFunctions {
  getWelcomePage = () => cy.getBySelector('welcome-page');

  getTitle = () => cy.getBySelector('welcome-page-title');

  getButton = () => cy.getBySelector('welcome-page-button');

  getImage = () => cy.getBySelector('welcome-page-img');

  showMain = () => this.getButton().click();

  private testWelcomePageContent = () => {
    this.getWelcomePage().should('exist');
    this.getImage().should('exist');
  };

  testWelcomePageContentPL = () => {
    this.testWelcomePageContent();
    this.getTitle().contains('INSTYTUT INFORMATYKI');
    this.getButton().contains('DOTKNIJ TUTAJ');
  };

  testWelcomePageContentEN = () => {
    this.testWelcomePageContent();
    LanguageChange.changeLanguage();
    this.getTitle().contains('INSTITUTE OF INFORMATICS');
    this.getButton().contains('TOUCH HERE');
  };
}
