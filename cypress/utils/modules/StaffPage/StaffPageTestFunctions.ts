import { API_URL } from 'cypress/constants';
import { staff_page_1, staff_page_2 } from '../../../fixtures/staff';

export class StaffPageTestFunctions {
  private getStaffListTile = () => cy.getBySelector('details-tile');
  private getStaffPagination = () => cy.getBySelector('staff-pagination');
  private getStaffListTileLink = () => cy.getBySelector('link-to-staff-details');

  mockGETStaff1 = () => {
    cy.intercept('GET', API_URL + '/staff', { statusCode: 200, body: staff_page_1 }).as('getStaff');
    cy.wait('@getStaff');
  };

  mockGETStaff2 = () => {
    cy.intercept('GET', API_URL + '/staff?page=2', { statusCode: 200, body: staff_page_2 }).as('getStaff');
    cy.wait('@getStaff');
  };

  testGoToNextPage = () => {
    cy.get('#root > div.MuiBox-root.css-f4xtbg > nav > ul > li:last-child() > button').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/staff?page=2');
    });
  };

  testGoToTheFirstPage = () => {
    cy.get('.MuiPaginationItem-page').contains('1').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/staff');
    });
  };

  testGoToTheSecondPage = () => {
    cy.get('.MuiPaginationItem-page').contains('2').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/staff?page=2');
    });
  };

  testGoToPreviousPage = () => {
    cy.get('#root > div.MuiBox-root.css-f4xtbg > nav > ul > li:nth-child(1) > button').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/staff?page=1');
    });
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
