import majorsList from '../../../fixtures/majors.json';

const major = majorsList[0];

export class MajorDetailsTestFunctions {
  private getTitle = () => cy.getBySelector('title');

  private getDivider = () => cy.getBySelector('divider');

  private getDetailsTile = () => cy.getBySelector('details-tile');

  private getSubHeader = () => cy.getBySelector('sub-header');

  private getParagraph = () => cy.getBySelector('paragraph');

  private getOrderedList = () => cy.getBySelector('ordered-list');

  private getUnorderedList = () => cy.getBySelector('unordered-list');

  private getFallbackContainer = () => cy.getBySelector('fallback-container');

  private mockGETMajorsDetails = () =>
    cy.fixture('majors.json').then(majors => {
      const object = majors[0];
      cy.intercept('GET', '/majors/63d99d74f284efff2fc1d117', object).as('getMajorDetails');
    });

  testMajorDetailsContentPL = () => {
    this.mockGETMajorsDetails();
    cy.wait('@getMajorDetails');

    this.getTitle().should('have.text', major.name);
    this.getDivider().should('exist');
    this.getDetailsTile().should('exist');

    let subheaderCounter = 0;
    let paragraphCounter = 0;
    let orderedListCounter = 0;
    let unorderedListCounter = 0;
    let fallbackContainerCounter = 0;

    major.content.forEach(({ element, text }) => {
      if (element === 'h2') {
        this.getSubHeader().eq(subheaderCounter).should('have.text', text);
        subheaderCounter++;
        return;
      }

      if (element === 'p') {
        this.getParagraph().eq(paragraphCounter).should('have.text', text);
        paragraphCounter++;
        return;
      }

      if (element === 'ol') {
        this.getOrderedList().eq(orderedListCounter).should('have.text', text);
        orderedListCounter++;
        return;
      }

      if (element === 'ul') {
        this.getUnorderedList().eq(unorderedListCounter).should('exist');
        unorderedListCounter++;
        return;
      }

      if (text.startsWith('<')) {
        this.getFallbackContainer().eq(fallbackContainerCounter).should('exist');
        fallbackContainerCounter++;
        return;
      }

      this.getParagraph().eq(paragraphCounter).should('have.text', text);
      paragraphCounter++;
    });
  };
}
