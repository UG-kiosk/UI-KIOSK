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

  it('should render first page all category news list in PL', () => {
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
    NewsPage.mockGETNews1();
    NewsPage.testNewsListButtonsPL();
    NewsPage.testNewsListContentPLPageOne();
  });

  // it('should render mfi news list in PL', () => {
  //   Header.testHeaderContentPL();
  //   Navbar.testNavbarContent();
  //   NewsPage.testNewsListButtonsPL();
  //   NewsPage.goToMFI();
  //   NewsPage.mockGETNewsMFI();
  //   NewsPage.testNewsMFIListContentPL();
  // });

  // it('should render inf news list in PL', () => {
  //   Header.testHeaderContentPL();
  //   Navbar.testNavbarContent();
  //   NewsPage.testNewsListButtonsPL();
  //   NewsPage.goToINF();
  //   NewsPage.mockGETNewsINF();
  //   NewsPage.testNewsINFListContentPL();
  // });
});

// describe('NewsList - Pagination', () => {
//   it('should go to the next page', () => {
//     cy.visit('/news');
//     NewsPage.mockGETNews1();
//     NewsPage.testGoToNextPage();
//   });

//   it('should go to the previous page', () => {
//     cy.visit('/news?page=2');
//     NewsPage.mockGETNews1();
//     NewsPage.testGoToPreviousPage();
//   });

//   it('should go to the second page', () => {
//     cy.visit('/news');
//     NewsPage.mockGETNews1();
//     NewsPage.testGoToTheSecondPage();
//   });

//   it('should go to the first page', () => {
//     cy.visit('/news?page=2');
//     NewsPage.mockGETNews2();
//     NewsPage.testGoToTheFirstPage();
//   });
// });
