import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MajorsListTestFunctions } from 'cypress/utils/modules/Majors/MajorsListTestFunctions';

const MajorsListPage = new MajorsListTestFunctions();
const Header = new HeaderTestFunctions();

describe('MajorsListPage', () => {
  beforeEach(() => {
    cy.visit('/majors');
  });

  it.only('Render Header PL', () => {
    Header.testHeaderContentPL();
  });

  it.only('Render Header EN', () => {
    Header.testHeaderContentEN();
  });

  it.only('render content', () => {
    MajorsListPage.testMajorsListContent();
  });

  it.only('request pending', () => {
    MajorsListPage.testMajorsListContentPendingStatus();
  });
});
