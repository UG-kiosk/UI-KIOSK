import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
// import { MajorDetailsTestFunctions } from 'cypress/utils/modules/Majors/MajoDetailsTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';

const Header = new HeaderTestFunctions();
// const MajorDetails = new MajorDetailsTestFunctions();
const Navbar = new NavbarTestFunctions();

describe('MajorDetails', () => {
  beforeEach(() => {
    cy.viewport(1080, 1920);
    cy.visit('/majors/63d99d74f284efff2fc1d117');
  });

  it.only('render content PL', () => {
    Header.testHeaderContentPL();
    // TODO - run tests as soon as we change requests url to dev
    // MajorDetails.testMajorDetailsContentPL();
    Navbar.testNavbarContent();
  });

  it.only('render content EN', () => {
    // TODO - test english version
    Header.testHeaderContentEN();
    Navbar.testNavbarContent();
  });
});
