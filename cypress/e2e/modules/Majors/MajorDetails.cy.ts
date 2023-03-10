import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MajorDetailsTestFunctions } from 'cypress/utils/modules/Majors/MajoDetailsTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';

const Header = new HeaderTestFunctions();
const MajorDetails = new MajorDetailsTestFunctions();
const Navbar = new NavbarTestFunctions();

describe('MajorDetails', () => {
  beforeEach(() => {
    cy.viewport(1080, 1920);
    // TODO go directly on the major details page
    cy.visit('/majors');
    cy.intercept('GET', '/majors', { fixture: 'majors.json' }).as('getMajorsList');
    cy.wait('@getMajorsList');
    cy.getBySelector('major-tile-container').eq(0).click();
  });

  it.only('render content PL', () => {
    Header.testHeaderContentPL();
    MajorDetails.testMajorDetailsContentPL();
    Navbar.testNavbarContent();
  });

  it.only('render content EN', () => {
    // TODO - test english version
    Header.testHeaderContentEN();
    Navbar.testNavbarContent();
  });
});
