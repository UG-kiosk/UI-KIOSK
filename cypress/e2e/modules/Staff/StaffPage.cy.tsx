import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { StaffPageTestFunctions } from 'cypress/utils/StaffPage/StaffPageTestFunctions';

const Header = new HeaderTestFunctions();
const StaffPage = new StaffPageTestFunctions();

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
  });

  it('should render the staff page in Polish', () => {
    StaffPage.testStaffList();
    Header.testHeaderContentPL();
  });

  it('should render the staff page in English', () => {
    StaffPage.testStaffList();
    Header.testHeaderContentEN();
  });

  it('should test if links are working', () => {
    StaffPage.testStaffLink();
  });
});
