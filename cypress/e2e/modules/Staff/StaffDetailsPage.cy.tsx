import { StaffPageTestFunctions } from 'cypress/utils/StaffPage/StaffPageTestFunctions';

const StaffPage = new StaffPageTestFunctions();

describe('StaffPage.cy.tsc', () => {
  // it('should render skeleton', () => {
  //   cy.visit('/staff/63cb1cf20ada513d831bc83d');
  //   StaffPage.testStaffDetailsContentPendingStatus();
  // });

  it('should render error-message', () => {
    cy.visit('/staff/63cb1cf20ada513d831bc83d');
    StaffPage.testStaffDetailsContentOnRequestError();
  });

  it('should render the staff detail page in Polish option 1', () => {
    StaffPage.testStaffDetailsPL();
  });

  // let's skip this test for now
  // it('should render the staff detail page in English option 1', () => {
  //   StaffPage.testStaffDetailsEN();
  // });

  it('should render the staff detail page in Polish option 2', () => {
    StaffPage.testStaffDetailsPL2();
  });

  // let's skip this test for now
  // it('should render the staff detail page in English option 2', () => {
  //   StaffPage.testStaffDetailsEN2();
  // });
});
