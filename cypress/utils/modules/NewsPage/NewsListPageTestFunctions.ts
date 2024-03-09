import { API_URL } from 'cypress/constants';
import { news_page, news_page_mfi, news_page_inf } from '../../../fixtures/news';

export class NewsListPageTestFunctions {
  private getErrorMessage = () => cy.getBySelector('error-message');
  private getNewsListTile = () => cy.getBySelector('details-tile');
  private getSkeletonRow = () => cy.getBySelector('skeleton-row');
  private getNewsButtons = () => cy.getBySelector('button');

  mockGETNews = () => {
    cy.intercept('GET', API_URL + '/news', { statusCode: 200, body: news_page }).as('getNews');
    cy.wait('@getNews');
  };

  mockGETNewsMFI = () => {
    cy.intercept('GET', API_URL + '/news?source=MFI', { statusCode: 200, body: news_page_mfi }).as('getMFINews');
    cy.wait('@getMFINews');
  };

  mockGETNewsINF = () => {
    cy.intercept('GET', API_URL + '/news?source=INF', { statusCode: 200, body: news_page_inf }).as('getINFNews');
    cy.wait('@getINFNews');
  };

  goToMFI() {
    this.getNewsButtons().eq(1).click();
  }

  goToINF() {
    this.getNewsButtons().eq(2).click();
  }

  testNewsListButtonsPL = () => {
    this.getNewsButtons().should('exist');
    this.getNewsButtons().should('have.length', 3);
    this.getNewsButtons().eq(0).contains('WSZYSTKO');
    this.getNewsButtons().eq(1).contains('WYDZIAŁ MFI');
    this.getNewsButtons().eq(2).contains('INFORMATYKA');
  };

  testNewsListContentPL = () => {
    this.getNewsListTile().should('exist');
    this.getNewsListTile().should('have.length', 23);
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
