import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { StaffPageTestFunctions } from 'cypress/utils/modules/StaffPage/StaffPageTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';

const Header = new HeaderTestFunctions();
const StaffPage = new StaffPageTestFunctions();
const Navbar = new NavbarTestFunctions();

// language tests will be added later
describe('StaffPage.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/staff');
  });

  it('should render skeleton', () => {
    StaffPage.testStaffListContentPendingStatus();
  });

  it('should render error-message', () => {
    StaffPage.testStaffListContentOnRequestError();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  it('should render first page of staff list in PL', () => {
    StaffPage.mockGETStaff1();
    StaffPage.testStaffListPageOne();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });
});

describe('StaffPage.cy.tsc - Next Page', () => {
  beforeEach(() => {
    cy.visit('/staff?page=2');
  });

  it('should render second page of staff list in Polish', () => {
    StaffPage.mockGETStaff2();
    Header.testHeaderContentEN();
    StaffPage.testStaffListPageTwo();
    Navbar.testNavbarContent();
  });
});

describe('StaffPage.cy.tsc - Changing page', () => {
  beforeEach(() => {
    cy.visit('/staff');
  });
  it('should navigate to the second page and back to the first page', () => {
    cy.get('.MuiPaginationItem-page').contains('2').click();
    cy.get('.MuiPaginationItem-page').contains('1').click();
  });
});
