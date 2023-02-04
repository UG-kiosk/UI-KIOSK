import { LanguageChangeTestFunctions } from './../LanguageChange/LanguageChangeTestFunctions';

const LanguageChange = new LanguageChangeTestFunctions();

export class StaffPageTestFunctions {
  // main panel
  private getStaffTile = () => cy.getBySelector('link-to-staff');
  private getStaffIcon = () => cy.getBySelector('people-alt-icon');
  private getStaffLink = () => cy.getBySelector('link-to-staff-text');
  private getStaffListTile = () => cy.getBySelector('details-tile');

  private testStaffPageTile = () => {
    this.getStaffTile().should('exist');
    this.getStaffIcon().should('exist');
  };

  // staff page
  private mockGETStaff = () => cy.intercept('GET', '/staff', { fixture: 'staff.json' });
  private getStaffListContainer = () => cy.getBySelector('staff-list-container');
  private getStaffListTileLink = () => cy.getBySelector('link-to-staff-details');

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

  testStaffList = () => {
    this.mockGETStaff();
    this.getStaffListTile().should('exist');
    this.getStaffListTile().should('have.length', 5);
    this.getStaffListTile().eq(0).contains('dr Joanna Czarnowska');
    this.getStaffListTile()
      .eq(0)
      .contains('Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Sztucznej Inteligencji');
    this.getStaffListTile().eq(1).contains('dr Mikołaj Czechlewski');
    this.getStaffListTile()
      .eq(1)
      .contains('Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Języków Formalnych');
    this.getStaffListTile().eq(2).contains('dr Hanna Furmańczyk');
    this.getStaffListTile()
      .eq(2)
      .contains(
        'Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Optymalizacji Kombinatorycznej',
      );
    this.getStaffListTile().eq(3).contains('mgr Mateusz Miotk');
    this.getStaffListTile()
      .eq(3)
      .contains(
        'Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Optymalizacji Kombinatorycznej',
      );
    this.getStaffListTile().eq(4).contains('dr hab. Paweł Żyliński, prof. UG');
    this.getStaffListTile()
      .eq(4)
      .contains(
        'Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Optymalizacji Kombinatorycznej',
      );
  };

  testStaffLink = () => {
    this.mockGETStaff();
    this.getStaffListContainer().should('exist');
    this.getStaffListTileLink().eq(0).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc83d');
    this.getStaffListTileLink().eq(1).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc83f');
    this.getStaffListTileLink().eq(2).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc85c');
    this.getStaffListTileLink().eq(3).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc8c9');
    this.getStaffListTileLink().eq(4).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc956');
  };

  private getSkeletonRow = () => cy.getBySelector('skeleton-row');

  testStaffListContentPendingStatus = () => {
    cy.intercept('GET', '/staff', request => {
      request.responseTimeout = 5000;
    });
    this.mockGETStaff();

    this.getSkeletonRow().should('have.length', 6);
  };

  // error handling will be improved in the future
  private getErrorMessage = () => cy.getBySelector('error-message');
  testStaffListContentOnRequestError = () => {
    cy.intercept('GET', '/staff', {
      statusCode: 500,
    }).as('getStaffList');
    this.getErrorMessage().should('exist');
  };
}
