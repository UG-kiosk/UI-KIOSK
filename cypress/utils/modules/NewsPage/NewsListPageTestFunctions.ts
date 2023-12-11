export class NewsListPageTestFunctions {
  private getErrorMessage = () => cy.getBySelector('error-message');

  testNewsListContentOnRequestError = () => {
    cy.intercept('GET', '/news', {
      statusCode: 500,
    }).as('getNewsList');
    this.getErrorMessage().should('exist');
  };

  private getSkeletonRow = () => cy.getBySelector('skeleton-row');

  testNewsListContentPendingStatus = () => {
    cy.intercept('GET', '/news', request => {
      request.responseTimeout = 5000;
    });
    this.getSkeletonRow().should('have.length', 6);
  };
}
