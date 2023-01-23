// import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { StaffPageTestFunctions } from 'cypress/utils/StaffPage/StaffPageTestFunctions';

// const Header = new HeaderTestFunctions();
const StaffPage = new StaffPageTestFunctions();

describe('StaffPage.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/staff');
  });

  // language tests are skipped for now
  it('should render the staff page in Polish', () => {
    // Header.testHeaderContentPL();
    StaffPage.testStaffList();
  });

  it('should render the staff page in English', () => {
    // Header.testHeaderContentEN();
    StaffPage.testStaffList();
  });

  it('should test if links are working', () => {
    StaffPage.testStaffLink();
  });

  // it('should render skeleton', () => {
  //   StaffPage.testStaffListContentPendingStatus();
  // });

  it('should render error-message', () => {
    StaffPage.testStaffListContentOnRequestError();
  });
});
