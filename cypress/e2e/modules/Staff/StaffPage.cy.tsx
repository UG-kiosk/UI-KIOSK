import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { StaffPageTestFunctions } from 'cypress/utils/modules/StaffPage/StaffPageTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';

const Header = new HeaderTestFunctions();
const StaffPage = new StaffPageTestFunctions();
const Navbar = new NavbarTestFunctions();

// test will be implemented in the future

describe('StaffPage.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/staff');
  });

  // it('should render skeleton', () => {
  //   StaffPage.testStaffListContentPendingStatus();
  // });

  it('should render error-message', () => {
    StaffPage.testStaffListContentOnRequestError();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  it('should render the staff page in Polish', () => {
    StaffPage.mockGETStaff();
    Header.testHeaderContentPL();
    // StaffPage.testStaffList();
    Navbar.testNavbarContent();
  });

  it('should render the staff page in English', () => {
    StaffPage.mockGETStaff();
    Header.testHeaderContentEN();
    // StaffPage.testStaffList();
    Navbar.testNavbarContent();
  });

  it('should test if links are working', () => {
    StaffPage.mockGETStaff();
    // StaffPage.testStaffLink();
  });
});
