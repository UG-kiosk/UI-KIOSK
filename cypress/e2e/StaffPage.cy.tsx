import { StaffPageTestFunctions } from 'cypress/utils/StaffPage/StaffPageTestFunctions';

const StaffPage = new StaffPageTestFunctions();

describe('StaffPage.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/staff');
  });

  it('should render the staff page', () => {
    StaffPage.testStaffList();
    StaffPage.testStaffLink();
    StaffPage.testStaffDetailsPL();
    StaffPage.testStaffDetailsEN();
  });
});
