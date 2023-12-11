import { API_URL } from 'cypress/constants';
import { news_page } from '../../../fixtures/news';

export class NewsListPageTestFunctions {
  private getErrorMessage = () => cy.getBySelector('error-message');
  private getNewsListTile = () => cy.getBySelector('details-tile');
  private getSkeletonRow = () => cy.getBySelector('skeleton-row');

  mockGETNews = () => {
    cy.intercept('GET', API_URL + '/news', { statusCode: 200, body: news_page.content }).as('getNews');
    cy.wait('@getNews');
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
