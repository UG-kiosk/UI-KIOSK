import { API_URL } from 'cypress/constants';
import { news_page_1, news_page_2, news_page_mfi, news_page_inf } from '../../../fixtures/news';

export class NewsListPageTestFunctions {
  private getErrorMessage = () => cy.getBySelector('error-message');
  private getNewsListTile = () => cy.getBySelector('details-tile');
  private getSkeletonRow = () => cy.getBySelector('skeleton-row');
  private getNewsButtons = () => cy.getBySelector('button');
  private getNewsPagination = () => cy.getBySelector('news-pagination');

  mockGETNews1 = () => {
    cy.intercept('GET', API_URL + '/news?language=Pl', { statusCode: 200, body: news_page_1 }).as('getNews');
    cy.wait('@getNews');
  };

  mockGETNews2 = () => {
    cy.intercept('GET', API_URL + '/news?language=Pl&page=2', { statusCode: 200, body: news_page_2 }).as('getNews2');
    cy.wait('@getNews2');
  };

  mockGETNewsMFI = () => {
    cy.intercept('GET', API_URL + '/news?language=Pl&source=MFI', { statusCode: 200, body: news_page_mfi }).as(
      'getNewsMFI',
    );
    this.goToMFI();
    cy.wait('@getNewsMFI');
  };

  mockGETNewsINF = () => {
    cy.intercept('GET', API_URL + '/news?language=Pl&source=INF', { statusCode: 200, body: news_page_inf }).as(
      'getNewsINF',
    );
    this.goToINF();
    cy.wait('@getNewsINF');
  };

  goToMFI() {
    this.getNewsButtons().eq(1).click();
  }

  goToINF() {
    this.getNewsButtons().eq(2).click();
  }

  testGoToNextPage = () => {
    cy.get('#root > div.MuiBox-root.css-f4xtbg > nav > ul > li:last-child() > button').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/news?page=2');
    });
  };

  testGoToTheFirstPage = () => {
    cy.get('.MuiPaginationItem-page').contains('1').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/news?page=1');
    });
  };

  testGoToTheSecondPage = () => {
    cy.get('.MuiPaginationItem-page').contains('2').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/news?page=2');
    });
  };

  testGoToPreviousPage = () => {
    cy.get('#root > div.MuiBox-root.css-f4xtbg > nav > ul > li:nth-child(1) > button').click();
    cy.location().should(loc => {
      expect(loc.href).to.include('/news?page=1');
    });
  };

  testNewsListButtonsPL = () => {
    this.getNewsButtons().should('exist');
    this.getNewsButtons().should('have.length', 3);
    this.getNewsButtons().eq(0).contains('WSZYSTKO');
    this.getNewsButtons().eq(1).contains('WYDZIAŁ MFI');
    this.getNewsButtons().eq(2).contains('INFORMATYKA');
  };

  testNewsListContentPLPageOne = () => {
    this.getNewsListTile().should('exist');
    this.getNewsListTile().should('have.length', 20);
    this.getNewsListTile().eq(0).contains('WYKŁAD OTWARTY');
    this.getNewsListTile()
      .eq(0)
      .contains(
        'Instytut Fizyki Teoretycznej i Astrofizyki wraz z Międzynarodowym Centrum Teorii Technologii Kwantowych zapraszają na wykład otwarty prof. Macieja Wojtkowskiego pt. „Control of spatial and temporal...',
      );
    this.getNewsListTile().eq(0).contains('08-12-2023');
    this.getNewsListTile().eq(0).contains('MFI');
    this.getNewsListTile()
      .eq(0)
      .find('img')
      .should(
        'have.attr',
        'src',
        'https://mfi.ug.edu.pl/sites/mfi.ug.edu.pl/files/styles/news_main_page/public/_nodes/news/111884/images/plakat-mfi1.png.webp?itok=6sViyCye',
      );
    this.getNewsPagination().should('exist');
  };

  testNewsListContentPLPageTwo = () => {
    this.getNewsListTile().should('exist');
    this.getNewsListTile().should('have.length', 3);
    this.getNewsListTile().eq(0).contains('Hackathon FarU. Trzy Uczelnie Morze Innowacji');
    this.getNewsListTile()
      .eq(0)
      .contains(
        'Serdecznie zapraszamy wszystkich pracowników (dydaktycznych, naukowych, administracyjnych), doktorantów i studentów do udziału! Poszukujemy osób gotowych na intensywną wymianę myśli i doświadczeń...',
      );
    this.getNewsListTile().eq(0).contains('25-10-2023');
    this.getNewsListTile().eq(0).contains('MFI');
    this.getNewsListTile()
      .eq(0)
      .find('img')
      .should(
        'have.attr',
        'src',
        'https://mfi.ug.edu.pl/sites/mfi.ug.edu.pl/files/styles/news_main_page/public/_nodes/news/111847/images/hac.png.webp?itok=qGbsZxo5',
      );
  };

  testNewsMFIListContentPL = () => {
    this.getNewsListTile().should('exist');
    this.getNewsListTile().should('have.length', 22);
    this.getNewsListTile().eq(0).contains('WYKŁAD OTWARTY');
    this.getNewsListTile()
      .eq(0)
      .contains(
        'Instytut Fizyki Teoretycznej i Astrofizyki wraz z Międzynarodowym Centrum Teorii Technologii Kwantowych zapraszają na wykład otwarty prof. Macieja Wojtkowskiego pt. „Control of spatial and temporal...',
      );
    this.getNewsListTile().eq(0).contains('08-12-2023');
    this.getNewsListTile().eq(0).contains('MFI');
    this.getNewsListTile()
      .eq(0)
      .find('img')
      .should(
        'have.attr',
        'src',
        'https://mfi.ug.edu.pl/sites/mfi.ug.edu.pl/files/styles/news_main_page/public/_nodes/news/111884/images/plakat-mfi1.png.webp?itok=6sViyCye',
      );
  };

  testNewsINFListContentPL = () => {
    this.getNewsListTile().should('exist');
    this.getNewsListTile().should('have.length', 1);
    this.getNewsListTile().eq(0).contains('linki do zajęć Dr Woźniak - Inf. Praktyczna');
    this.getNewsListTile()
      .eq(0)
      .contains(
        'Od 27.11.2023 zajęcia Pani Dr Moniki Woźniak z przedmiotu "Zarządzanie projektem informatycznym" będą odbywały się zdalnie.',
      );
    this.getNewsListTile().eq(0).contains('25-11-2023');
    this.getNewsListTile().eq(0).contains('INF');
    this.getNewsListTile().eq(0).find('img').should('have.attr', 'src', 'https://inf.ug.edu.pl/tmbs/pin.png');
  };

  testNewsListContentOnRequestError = () => {
    cy.intercept('GET', '/news', {
      statusCode: 500,
    }).as('getNewsList');
    this.getErrorMessage().should('exist');
  };

  testNewsListContentPendingStatus = () => {
    cy.intercept('GET', '/news', request => {
      request.responseTimeout = 5000;
    });
    this.getSkeletonRow().should('have.length', 6);
  };
}
