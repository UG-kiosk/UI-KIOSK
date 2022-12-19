export class LanguageChangeTestFunctions {
  getLanguageChangeButton = () => cy.getBySelector('language-change');

  changeLanguage = () => this.getLanguageChangeButton().click();
}
