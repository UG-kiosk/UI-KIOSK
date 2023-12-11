import { API_URL } from 'cypress/constants';
import { staff_page_1 } from '../../../fixtures/staff';

export class StaffDetailsTestFunctions {
  mockGETDetailsWithoutTutorial = () => {
    cy.intercept('GET', API_URL + '/staff/656a74c983a231f468534835', {
      statusCode: 200,
      body: staff_page_1.content[0],
    }).as('getDetailsWithoutTutorial');
    cy.wait('@getDetailsWithoutTutorial');
  };

  mockGETStaffDetailsWithTutorial = () => {
    cy.intercept('GET', API_URL + '/staff/6565b4e62ac7bade08e0dbe9', {
      statusCode: 200,
      body: staff_page_1.content[14],
    }).as('getDetailsWithTutorial');
    cy.wait('@getDetailsWithTutorial');
  };

  private getStaffDetailsName = () => cy.getBySelector('academic-name');
  private getDetailsTile = () => cy.getBySelector('details-tile');
  private getDetailsTilePost = () => cy.getBySelector('details-post');
  private getDetailsTileContact = () => cy.getBySelector('contact');
  private getDetailsTileContactEmail = () => cy.getBySelector('contact-email');
  private getDetailsTileTutorial = () => cy.getBySelector('tutorial');
  private getDetailsTileTutorialSchedule = () => cy.getBySelector('tutorial-schedule');

  testDetailsWithoutTutorialPL = () => {
    this.mockGETDetailsWithoutTutorial();
    cy.wait('@getDetailsWithoutTutorial');
    this.getStaffDetailsName().should('exist');
    this.getStaffDetailsName().contains('dr Justyna Barzowska');
    this.getDetailsTile().should('exist');
    this.getDetailsTile().should('have.length', 4);
    this.getDetailsTilePost().contains('Adiunkt');
    this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
    this.getDetailsTile().eq(2).contains('Instytut Fizyki Doświadczalnej');
    this.getDetailsTile().eq(3).contains('Zakład Spektroskopii Fazy Skondensowanej');
    this.getDetailsTileContact().should('exist');
    this.getDetailsTileContact().contains('Kontakt');
    this.getDetailsTileContactEmail().contains('E-mail: justyna.barzowska@ug.edu.pl');
    this.getDetailsTileTutorial().should('not.exist');
    this.getDetailsTileTutorialSchedule().should('not.exist');
  };

  testDetailsWithTutorialPL = () => {
    this.mockGETStaffDetailsWithTutorial();
    this.getStaffDetailsName().should('exist');
    this.getStaffDetailsName().contains('dr Rafał Lutowski');
    this.getDetailsTile().should('exist');
    this.getDetailsTile().should('have.length', 4);
    this.getDetailsTilePost().contains('Adiunkt');
    this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
    this.getDetailsTile().eq(2).contains('Instytut Matematyki');
    this.getDetailsTile().eq(3).contains('Zakład Geometrii');
    this.getDetailsTileContact().should('exist');
    this.getDetailsTileContact().contains('Kontakt');
    this.getDetailsTileContactEmail().contains('E-mail: rafal.lutowski@ug.edu.pl');
    this.getDetailsTileTutorial().should('exist');
    this.getDetailsTileTutorial().contains('Konsultacje');
    this.getDetailsTileTutorialSchedule().should('exist');
    this.getDetailsTileTutorialSchedule().contains('Środy, w godzinach 10:15-11:45 lub po umówieniu się.');
  };

  // pending status and error handling
  private getSkeletonRow = () => cy.getBySelector('skeleton-row');
  private getSkeletonTile = () => cy.getBySelector('skeleton-tile');

  testDetailsContentPendingStatus = () => {
    cy.intercept('GET', API_URL + '/staff/656a74c983a231f468534835', request => {
      request.responseTimeout = 5000;
    });
    this.getSkeletonRow().should('exist');
    this.getSkeletonRow().should('have.length', 3);
    this.getSkeletonTile().should('exist');
    this.getSkeletonTile().should('have.length', 2);
  };

  // error handling will be improved in the future
  private getErrorMessage = () => cy.getBySelector('error-message');

  testDetailsContentOnRequestError = () => {
    cy.intercept('GET', API_URL + '/staff/656a74c983a231f468534835', {
      statusCode: 500,
    }).as('staffDetails');
    this.getErrorMessage().should('exist');
  };
}
