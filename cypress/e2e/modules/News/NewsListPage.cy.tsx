import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';
import { NewsListPageTestFunctions } from 'cypress/utils/modules/NewsPage/NewsListPageTestFunctions';

const Header = new HeaderTestFunctions();
const Navbar = new NavbarTestFunctions();
const NewsPage = new NewsListPageTestFunctions();

describe('NewsListPage', () => {
  beforeEach(() => {
    cy.visit('/news');
  });

  it('should render skeleton', () => {
    NewsPage.testNewsListContentPendingStatus();
  });

  it('should render error message', () => {
    NewsPage.testNewsListContentOnRequestError();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  it('should render all news list in PL', () => {
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
    NewsPage.mockGETNews();
    NewsPage.testNewsListButtonsPL();
    NewsPage.testNewsListContentPL();
  });

  it('should render mfi news list in PL', () => {
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
    NewsPage.testNewsListButtonsPL();
    NewsPage.goToMFI();
    NewsPage.mockGETNewsMFI();
    NewsPage.testNewsMFIListContentPL();
  });

  it('should render inf news list in PL', () => {
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
    NewsPage.testNewsListButtonsPL();
    NewsPage.goToINF();
    NewsPage.mockGETNewsINF();
    NewsPage.testNewsINFListContentPL();
  });
});
