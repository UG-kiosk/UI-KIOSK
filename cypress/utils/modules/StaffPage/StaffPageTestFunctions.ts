import { staff_page_1, staff_page_2 } from '../../../fixtures/staff';

export class StaffPageTestFunctions {
  private getStaffListTile = () => cy.getBySelector('details-tile');
  private getStaffPagination = () => cy.getBySelector('staff-pagination');
  private getStaffListTileLink = () => cy.getBySelector('link-to-staff-details');

  mockGETStaff1 = () => {
    cy.intercept('GET', 'https://api-kiosk-dev.onrender.com/staff', { statusCode: 200, body: staff_page_1 }).as(
      'getStaff',
    );
    cy.wait('@getStaff');
  };

  mockGETStaff2 = () => {
    cy.intercept('GET', 'https://api-kiosk-dev.onrender.com/staff?page=2', { statusCode: 200, body: staff_page_2 }).as(
      'getStaff',
    );
    cy.wait('@getStaff');
  };

  testStaffListPageOne = () => {
    this.getStaffListTile().should('exist');
    this.getStaffListTile().should('have.length', 30);
    this.getStaffListTile().eq(0).contains('dr Justyna Barzowska');
    this.getStaffListTile()
      .eq(0)
      .contains(
        'Wydział Matematyki, Fizyki i Informatyki • Instytut Fizyki Doświadczalnej • Zakład Spektroskopii Fazy Skondensowanej',
      );
    this.getStaffListTileLink().eq(0).should('have.attr', 'href', '/staff/6565b4e62ac7bade08e0db5d');

    this.getStaffPagination().should('exist');
    cy.get('.MuiPaginationItem-root[aria-label="page 1"]').should('exist');
    cy.get('.MuiPaginationItem-root[aria-label="page 1"]').should('have.class', 'Mui-selected');
    cy.get('.MuiPaginationItem-root[aria-label="page 1"]').should('have.attr', 'aria-current', 'true');
    cy.get('.MuiPaginationItem-root[aria-label="Go to page 2"]').should('exist');
    cy.get('.MuiPaginationItem-root[aria-label="Go to page 2"]').should('not.have.class', 'Mui-selected');
    cy.get('.MuiPaginationItem-root[aria-label="Go to page 2"]').should('not.have.attr', 'aria-current', 'true');
  };

  testStaffListPageTwo = () => {
    this.getStaffListTile().should('exist');
    this.getStaffListTile().should('have.length', 2);
    this.getStaffListTile().eq(0).contains('dr Jacek Tryba');
    this.getStaffListTile()
      .eq(0)
      .contains('Wydział Matematyki, Fizyki i Informatyki • Instytut Matematyki • Zakład Funkcji Rzeczywistych');
    this.getStaffListTileLink().eq(0).should('have.attr', 'href', '/staff/6565b4e62ac7bade08e0dc75');
    this.getStaffPagination().should('exist');
    cy.get('.MuiPaginationItem-root[aria-label="Go to page 1"]').should('exist');
    cy.get('.MuiPaginationItem-root[aria-label="Go to page 1"]').should('not.have.class', 'Mui-selected');
    cy.get('.MuiPaginationItem-root[aria-label="Go to page 1"]').should('not.have.attr', 'aria-current', 'true');
    cy.get('.MuiPaginationItem-root[aria-label="page 2"]').should('exist');
    cy.get('.MuiPaginationItem-root[aria-label="page 2"]').should('have.class', 'Mui-selected');
    cy.get('.MuiPaginationItem-root[aria-label="page 2"]').should('have.attr', 'aria-current', 'true');
  };

  private getSkeletonRow = () => cy.getBySelector('skeleton-row');

  testStaffListContentPendingStatus = () => {
    cy.intercept('GET', '/api/staff', request => {
      request.responseTimeout = 5000;
    });
    this.getSkeletonRow().should('have.length', 6);
  };

  private getErrorMessage = () => cy.getBySelector('error-message');

  testStaffListContentOnRequestError = () => {
    cy.intercept('GET', '/staff', {
      statusCode: 500,
    }).as('getStaffList');
    this.getErrorMessage().should('exist');
  };
}
