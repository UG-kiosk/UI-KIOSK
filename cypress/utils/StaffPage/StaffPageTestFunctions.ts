import { LanguageChangeTestFunctions } from './../LanguageChange/LanguageChangeTestFunctions';

const LanguageChange = new LanguageChangeTestFunctions();

export class StaffPageTestFunctions {
  // main panel
  private getStaffTile = () => cy.getBySelector('link-to-staff');
  private getStaffIcon = () => cy.getBySelector('people-alt-icon');
  private getStaffLink = () => cy.getBySelector('link-to-staff-text');

  private getStaffListTile = () => cy.getBySelector('details-tile');

  // staff page
  private mockGETStaff = () => cy.intercept('GET', '/staff', { fixture: 'staff.json' });
  private getStaffListContainer = () => cy.getBySelector('staff-list-container');
  // staf details page
  mockGETStaffDetails = () => {
    cy.fixture('staff.json')
      .then(staff => {
        const object = staff[0];
        cy.intercept('GET', '/staff/63cb1cf20ada513d831bc83d', object);
      })
      .as('getStaffDetails');
  };
  private mockGETStaffDetails2 = () => {
    cy.fixture('staff.json').then(staff => {
      const object = staff[3];
      cy.intercept('GET', '/staff/63cb1cf20ada513d831bc8c9', object).as('getStaffDetails2');
    });
  };
  private getStaffListTileLink = () => cy.getBySelector('link-to-staff-details');

  private getStaffDetailsName = () => cy.getBySelector('academic-name');
  private getDetailsTile = () => cy.getBySelector('details-tile');
  private getDetailsTilePost = () => cy.getBySelector('details-post');
  private getDetailsTileContact = () => cy.getBySelector('contact');
  private getDetailsTileContactEmail = () => cy.getBySelector('contact-email');
  private getDetailsTileTutorial = () => cy.getBySelector('tutorial');
  private getDetailsTileTutorialSchedule = () => cy.getBySelector('tutorial-schedule');

  // main panel
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
    this.mockGETStaff();
    this.getStaffListContainer().should('exist');
    this.getStaffListTileLink().eq(0).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc83d');
    this.getStaffListTileLink().eq(1).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc83f');
    this.getStaffListTileLink().eq(2).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc85c');
    this.getStaffListTileLink().eq(3).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc8c9');
    this.getStaffListTileLink().eq(4).should('have.attr', 'href', '/staff/63cb1cf20ada513d831bc956');

    this.mockGETStaffDetails();
    this.getStaffListTileLink().eq(0).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/staff/63cb1cf20ada513d831bc83d');
    });
    cy.go('back');
    this.mockGETStaffDetails2();
    this.getStaffListTileLink().eq(3).click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/staff/63cb1cf20ada513d831bc8c9');
    });
  };
  // with tutorial off
  testStaffDetailsPL = () => {
    cy.visit('/staff/63cb1cf20ada513d831bc83d');
    this.mockGETStaffDetails();
    cy.wait('@getStaffDetails');
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

  // with tutorial on
  testStaffDetailsPL2 = () => {
    cy.visit('/staff/63cb1cf20ada513d831bc8c9');
    this.mockGETStaffDetails2();
    cy.wait('@getStaffDetails2');
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
  // testStaffDetailsEN = () => {
  //   cy.visit('/staff/63cb1cf20ada513d831bc83d');
  //   this.mockGETStaffDetails();
  //   LanguageChange.changeLanguage();
  //   this.getStaffDetailsName().should('exist');
  //   this.getDetailsTile().should('exist');
  //   this.getDetailsTile().should('have.length', 4);
  //   this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
  //   this.getDetailsTile().eq(2).contains('Instytut Informatyki');
  //   this.getDetailsTile().eq(3).contains('Zakład Sztucznej Inteligencji');
  //   this.getDetailsTileContact().should('exist');
  //   this.getDetailsTileContact().contains('Contact');
  //   this.getDetailsTileContactEmail().contains('E-mail: joanna.czarnowska@mat.ug.edu.pl');
  //   this.getDetailsTileTutorial().should('not.exist');
  //   this.getDetailsTileTutorialSchedule().should('not.exist');
  // };

  // with tutorial on
  // commented out because language option will be change later
  // testStaffDetailsEN2 = () => {
  //   cy.visit('/staff/63cb1cf20ada513d831bc8c9');
  //   this.mockGETStaffDetails2();
  //   LanguageChange.changeLanguage();
  //   this.getStaffDetailsName().should('exist');
  //   this.getDetailsTile().should('exist');
  //   this.getDetailsTile().should('have.length', 4);
  //   this.getDetailsTilePost().contains('Asystent');
  //   this.getDetailsTile().eq(1).contains('Wydział Matematyki, Fizyki i Informatyki');
  //   this.getDetailsTile().eq(2).contains('Instytut Informatyki');
  //   this.getDetailsTile().eq(3).contains('Zakład Optymalizacji Kombinatorycznej');
  //   this.getDetailsTileContact().should('exist');
  //   this.getDetailsTileContact().contains('Contact');
  //   this.getDetailsTileContactEmail().contains('E-mail: mateusz.miotk@inf.ug.edu.pl');
  //   this.getDetailsTileTutorial().should('exist');
  //   this.getDetailsTileTutorial().contains('Tutorial');
  //   this.getDetailsTileTutorialSchedule().should('exist');
  //   this.getDetailsTileTutorialSchedule().contains('Czwartki 8-10 ');
  // };

  private getSkeletonRow = () => cy.getBySelector('skeleton-row');

  testStaffListContentPendingStatus = () => {
    cy.intercept('GET', '/staff', request => {
      request.responseTimeout = 5000;
    });
    this.mockGETStaff();

    this.getSkeletonRow().should('have.length', 6);
  };

  private getSkeletonTile = () => cy.getBySelector('skeleton-tile');

  testStaffDetailsContentPendingStatus = () => {
    cy.intercept('GET', '/staff/63cb1cf20ada513d831bc83d', request => {
      request.responseTimeout = 5000;
    });
    this.mockGETStaffDetails();
    this.getSkeletonRow().should('exist');
    this.getSkeletonTile().should('exist');
    this.getDetailsTile().should('have.length', 4);
  };

  // error handling will be improved in the future
  private getErrorMessage = () => cy.getBySelector('error-message');
  testStaffListContentOnRequestError = () => {
    cy.intercept('GET', '/staff', {
      statusCode: 500,
    }).as('getStaffList');
    this.getErrorMessage().should('exist');
  };

  testStaffDetailsContentOnRequestError = () => {
    cy.intercept('GET', '/staff/63cb1cf20ada513d831bc83d', {
      statusCode: 500,
    }).as('staffDetails');
    this.getErrorMessage().should('exist');
  };
}
