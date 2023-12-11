export class NewsListPageTestFunctions {
  private getSkeletonRow = () => cy.getBySelector('skeleton-row');
  testNewsListContentPendingStatus = () => {
    cy.intercept('GET', '/api/news', request => {
      request.responseTimeout = 5000;
    });
    this.getSkeletonRow().should('have.length', 6);
  };
}
