export class MajorsListTestFunctions {
  private getMajorTile = () => cy.getBySelector('details-tile');

  private getMajorTileContainer = () => cy.getBySelector('major-tile-container');

  private mockGETMajors = () => cy.intercept('GET', '/majors', { fixture: 'majors.json' });

  testMajorsListContent = () => {
    this.mockGETMajors();

    this.getMajorTileContainer().should('have.length', 4);
    this.getMajorTile().should('have.length', 4);

    this.getMajorTile().eq(0).should('have.text', 'Bezpieczeństwo jądrowe i ochrona radiologiczna');
    this.getMajorTile().eq(1).should('have.text', 'Bioinformatyka');
    this.getMajorTile().eq(2).should('have.text', 'Fizyka');
    this.getMajorTile().eq(3).should('have.text', 'Profil ogólnoakademicki');
  };
}
