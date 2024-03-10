import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';
import { NewsDetailsTestFunctions } from 'cypress/utils/modules/NewsPage/NewsDetailsPageTestFunctions';

const Header = new HeaderTestFunctions();
const NewsDetails = new NewsDetailsTestFunctions();
const Navbar = new NavbarTestFunctions();

describe('NewsDetailsPage.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/news/657785edb09d333037f7c1b5');
  });

  it('should render skeleton', () => {
    NewsDetails.testNewsDetailsContentPendingStatus();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  it('should render error-message', () => {
    NewsDetails.testNewsDetailsContentOnRequestError();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  it('should render news page details in PL', () => {
    NewsDetails.mockGETNewsDetails();
    NewsDetails.testNewsDetailsPL();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });
});
