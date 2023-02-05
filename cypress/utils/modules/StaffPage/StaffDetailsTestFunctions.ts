// import { LanguageChangeTestFunctions } from './../LanguageChange/LanguageChangeTestFunctions';

// const LanguageChange = new LanguageChangeTestFunctions();

export class StaffDetailsTestFunctions {
  mockGETDetailsWithoutTutorial = async () => {
    cy.fixture('staff.json')
      .then(staff => {
        const object = staff[0];
        cy.intercept('GET', '/staff/63cb1cf20ada513d831bc83d', object);
      })
      .as('getDetailsWithoutTutorial');
  };

  mockGETStaffDetailsWithTutorial = async () => {
    cy.fixture('staff.json').then(staff => {
      const object = staff[3];
      cy.intercept('GET', '/staff/63cb1cf20ada513d831bc8c9', object).as('getDetailsWithTutorial');
    });
  };

  private getStaffDetailsName = () => cy.getBySelector('academic-name');
  private getDetailsTile = () => cy.getBySelector('details-tile');
  private getDetailsTilePost = () => cy.getBySelector('details-post');
  private getDetailsTileContact = () => cy.getBySelector('contact');
  private getDetailsTileContactEmail = () => cy.getBySelector('contact-email');
  private getDetailsTileTutorial = () => cy.getBySelector('tutorial');
  private getDetailsTileTutorialSchedule = () => cy.getBySelector('tutorial-schedule');

  testDetailsWithoutTutorialPL = () => {
    cy.visit('/staff/63cb1cf20ada513d831bc83d');
    this.mockGETDetailsWithoutTutorial();
    cy.wait('@getDetailsWithoutTutorial');
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

  testDetailsWithTutorialPL = () => {
    cy.visit('/staff/63cb1cf20ada513d831bc8c9');
    this.mockGETStaffDetailsWithTutorial();
    cy.wait('@getDetailsWithTutorial');
    this.getStaffDetailsName().should('exist');
    this.getDetailsTile().should('exist');
    this.getDetailsTile().should('have.length', 4);
    this.getDetailsTilePost().contains('Asystent');
    this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
    this.getDetailsTile().eq(2).contains('Instytut Informatyki');
    this.getDetailsTile().eq(3).contains('Zakład Optymalizacji Kombinatorycznej');
    this.getDetailsTileContact().should('exist');
    this.getDetailsTileContact().contains('Kontakt');
    this.getDetailsTileContactEmail().contains('E-mail: mateusz.miotk@inf.ug.edu.pl');
    this.getDetailsTileTutorial().should('exist');
    this.getDetailsTileTutorial().contains('Konsultacje');
    this.getDetailsTileTutorialSchedule().should('exist');
    this.getDetailsTileTutorialSchedule().contains('Czwartki 8-10 ');
  };

  // commented out because language option will be change later
  //   testDetailsWithoutTutorialEN = () => {
  //     cy.visit('/staff/63cb1cf20ada513d831bc83d');
  //     this.mockGETDetailsWithoutTutorial();
  //     LanguageChange.changeLanguage();
  //     this.getStaffDetailsName().should('exist');
  //     this.getDetailsTile().should('exist');
  //     this.getDetailsTile().should('have.length', 4);
  //     this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
  //     this.getDetailsTile().eq(2).contains('Instytut Informatyki');
  //     this.getDetailsTile().eq(3).contains('Zakład Sztucznej Inteligencji');
  //     this.getDetailsTileContact().should('exist');
  //     this.getDetailsTileContact().contains('Contact');
  //     this.getDetailsTileContactEmail().contains('E-mail: joanna.czarnowska@mat.ug.edu.pl');
  //     this.getDetailsTileTutorial().should('not.exist');
  //     this.getDetailsTileTutorialSchedule().should('not.exist');
  //   };

  //   // commented out because language option will be change later
  //   testDetailsWithTutorialEN = () => {
  //     cy.visit('/staff/63cb1cf20ada513d831bc8c9');
  //     this.mockGETStaffDetailsWithTutorial();
  //     LanguageChange.changeLanguage();
  //     this.getStaffDetailsName().should('exist');
  //     this.getDetailsTile().should('exist');
  //     this.getDetailsTile().should('have.length', 4);
  //     this.getDetailsTilePost().contains('Asystent');
  //     this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
  //     this.getDetailsTile().eq(2).contains('Instytut Informatyki');
  //     this.getDetailsTile().eq(3).contains('Zakład Optymalizacji Kombinatorycznej');
  //     this.getDetailsTileContact().should('exist');
  //     this.getDetailsTileContact().contains('Contact');
  //     this.getDetailsTileContactEmail().contains('E-mail: mateusz.miotk@inf.ug.edu.pl');
  //     this.getDetailsTileTutorial().should('exist');
  //     this.getDetailsTileTutorial().contains('Tutorial');
  //     this.getDetailsTileTutorialSchedule().should('exist');
  //     this.getDetailsTileTutorialSchedule().contains('Czwartki 8-10 ');
  //   };

  // pending status and error handling

  private getSkeletonRow = () => cy.getBySelector('skeleton-row');
  private getSkeletonTile = () => cy.getBySelector('skeleton-tile');

  testDetailsContentPendingStatus = () => {
    cy.intercept('GET', '/staff/63cb1cf20ada513d831bc83d', request => {
      request.responseTimeout = 5000;
    });
    this.mockGETDetailsWithoutTutorial();
    this.getSkeletonRow().should('exist');
    this.getSkeletonTile().should('exist');
    this.getDetailsTile().should('have.length', 4);
  };

  // error handling will be improved in the future
  private getErrorMessage = () => cy.getBySelector('error-message');

  testDetailsContentOnRequestError = () => {
    cy.intercept('GET', '/staff/63cb1cf20ada513d831bc83d', {
      statusCode: 500,
    }).as('staffDetails');
    this.getErrorMessage().should('exist');
  };
}
