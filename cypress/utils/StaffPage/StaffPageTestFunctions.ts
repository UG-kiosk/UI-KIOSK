import { LanguageChangeTestFunctions } from './../LanguageChange/LanguageChangeTestFunctions';

const LanguageChange = new LanguageChangeTestFunctions();

export class StaffPageTestFunctions {
  private getStaffTile = () => cy.getBySelector('link-to-staff');
  private getStaffIcon = () => cy.getBySelector('people-alt-icon');
  private getStaffLink = () => cy.getBySelector('link-to-staff-text');

  private getStaffListTile = () => cy.getBySelector('details-tile');

  private mockGETStaff = () => cy.intercept('GET', '/staff', { fixture: 'staff.json' });
  private mockGETStaffDetails = () =>
    cy.intercept('GET', '/staff/63cb1cf20ada513d831bc83d', { fixture: 'academic.json' });

  private getStaffListTileLink = () => cy.getBySelector('link-to-staff-details');

  private getStaffDetailsName = () => cy.getBySelector('academic-name');
  private getDetailsTile = () => cy.getBySelector('details-tile');
  private getDetailsTilePost = () => cy.getBySelector('details-post');
  private getDetailsTileContact = () => cy.getBySelector('contact');
  private getDetailsTileContactEmail = () => cy.getBySelector('contact-email');
  private getDetailsTileTutorial = () => cy.getBySelector('tutorial');
  private getDetailsTileTutorialSchedule = () => cy.getBySelector('tutorial-schedule');

  private testStaffPageTile = () => {
    this.getStaffTile().should('exist');
    this.getStaffIcon().should('exist');
  };

  testTileContentPL = () => {
    this.testStaffPageTile();
    this.getStaffLink().contains('skład osobowy');
  };

  testTileContentEN = () => {
    this.testStaffPageTile();
    LanguageChange.changeLanguage();
    this.getStaffLink().contains('faculty members');
  };

  testNavigationToStaffPage = () => {
    this.getStaffTile().click();
    cy.url().should('include', '/staff');
  };

  testStaffList = () => {
    this.mockGETStaff();
    this.getStaffListTile().should('exist');
    this.getStaffListTile().should('have.length', 5);
    this.getStaffListTile().eq(0).contains('dr Joanna Czarnowska');
    this.getStaffListTile()
      .eq(0)
      .contains('Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Sztucznej Inteligencji');
    this.getStaffListTile().eq(1).contains('dr Mikołaj Czechlewski');
    this.getStaffListTile()
      .eq(1)
      .contains('Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Języków Formalnych');
    this.getStaffListTile().eq(2).contains('dr Hanna Furmańczyk');
    this.getStaffListTile()
      .eq(2)
      .contains(
        'Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Optymalizacji Kombinatorycznej',
      );
    this.getStaffListTile().eq(3).contains('mgr Mateusz Miotk');
    this.getStaffListTile()
      .eq(3)
      .contains(
        'Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Optymalizacji Kombinatorycznej',
      );
    this.getStaffListTile().eq(4).contains('dr hab. Paweł Żyliński, prof. UG');
    this.getStaffListTile()
      .eq(4)
      .contains(
        'Wydział Matematyki, Fizyki i Informatyki • Instytut Informatyki • Zakład Optymalizacji Kombinatorycznej',
      );
  };

  testStaffLink = () => {
    this.mockGETStaffDetails();
    this.getStaffListTileLink().eq(0).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/staff/63cb1cf20ada513d831bc83d');
    });
  };

  testStaffDetailsPL = () => {
    this.mockGETStaffDetails();
    this.getStaffDetailsName().should('exist');
    this.getDetailsTile().should('exist');
    this.getDetailsTile().should('have.length', 4);
    this.getDetailsTilePost().contains('Starszy wykładowca');
    this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
    this.getDetailsTile().eq(2).contains('Instytut Informatyki');
    this.getDetailsTile().eq(3).contains('Zakład Sztucznej Inteligencji');
    this.getDetailsTileContact().should('exist');
    this.getDetailsTileContact().contains('Kontakt');
    this.getDetailsTileContactEmail().contains('E-mail: joanna.czarnowska@mat.ug.edu.pl');
    this.getDetailsTileTutorial().should('not.exist');
    this.getDetailsTileTutorialSchedule().should('not.exist');
  };

  testStaffDetailsEN = () => {
    this.mockGETStaffDetails();
    LanguageChange.changeLanguage();
    this.getStaffDetailsName().should('exist');
    this.getDetailsTile().should('exist');
    this.getDetailsTile().should('have.length', 4);
    this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
    this.getDetailsTile().eq(2).contains('Instytut Informatyki');
    this.getDetailsTile().eq(3).contains('Zakład Sztucznej Inteligencji');
    this.getDetailsTileContact().should('exist');
    this.getDetailsTileContact().contains('Contact');
    this.getDetailsTileContactEmail().contains('E-mail: joanna.czarnowska@mat.ug.edu.pl');
    this.getDetailsTileTutorial().should('not.exist');
    this.getDetailsTileTutorialSchedule().should('not.exist');
  };
}
