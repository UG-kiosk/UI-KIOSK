import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MajorsListTestFunctions } from 'cypress/utils/modules/Majors/MajorsListTestFunctions';

const MajorsListPage = new MajorsListTestFunctions();
const Header = new HeaderTestFunctions();

describe('MajorsListPage', () => {
  beforeEach(() => {
    cy.visit('/majors');
  });

  it.only('render content PL', () => {
    Header.testHeaderContentPL();
    MajorsListPage.testMajorsListContent();
  });

  it.only('render content EN', () => {
    Header.testHeaderContentEN();
    // TODO - english version
  });

  it.only('request pending', () => {
    Header.testHeaderContentPL();
    MajorsListPage.testMajorsListContentPendingStatus();
  });

  it.only('get request error', () => {
    Header.testHeaderContentPL();
    MajorsListPage.testMajorsListContentOnRequestError();
  });
});
