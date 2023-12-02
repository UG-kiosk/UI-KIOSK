import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { StaffDetailsTestFunctions } from 'cypress/utils/modules/StaffPage/StaffDetailsTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';

const Header = new HeaderTestFunctions();
const StaffDetails = new StaffDetailsTestFunctions();
const Navbar = new NavbarTestFunctions();

describe('StaffDetailsPage.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/staff/656a74c983a231f468534835');
  });

  it('should render skeleton', () => {
    StaffDetails.testDetailsContentPendingStatus();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  it('should render error-message', () => {
    StaffDetails.testDetailsContentOnRequestError();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  it('should render the faculty member details page in PL', () => {
    StaffDetails.testDetailsWithoutTutorialPL();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });
});

describe('StaffDetailsPage.cy.tsc - more info', () => {
  beforeEach(() => {
    cy.visit('/staff/6565b4e62ac7bade08e0dbe9');
  });

  it('should render the faculty member details page in PL', () => {
    StaffDetails.testDetailsWithTutorialPL();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });
});
