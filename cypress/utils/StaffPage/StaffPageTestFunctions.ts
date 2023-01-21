import { LanguageChangeTestFunctions } from './../LanguageChange/LanguageChangeTestFunctions';

const LanguageChange = new LanguageChangeTestFunctions();

export class StaffPageTestFunctions {
  getStaffTile = () => cy.getBySelector('link-to-staff');
  getStaffIcon = () => cy.getBySelector('people-alt-icon');
  getStaffLink = () => cy.getBySelector('link-to-staff-text');

  private testStaffPageTile = () => {
    this.getStaffTile().should('exist');
    this.getStaffIcon().should('exist');
  };

  testTileContentPL = () => {
    this.testStaffPageTile();
    this.getStaffLink().contains('skład osobowy');
  };

  testTileContentEN = () => {
    this.testStaffPageTile();
    LanguageChange.changeLanguage();
    this.getStaffLink().contains('faculty members');
  };

  testNavigationToStaffPage = () => {
    this.getStaffTile().click();
    cy.url().should('include', '/staff');
  };
}
