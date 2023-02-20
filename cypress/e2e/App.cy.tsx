import { WelcomePageTestFunctions } from 'cypress/utils/WelcomePage/WelcomePageTestFunctions';
import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MainPanelTestFunctions } from 'cypress/utils/MainPanel/MainPanelTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';

const Header = new HeaderTestFunctions();
const MainPanel = new MainPanelTestFunctions();
const WelcomePage = new WelcomePageTestFunctions();
const Navbar = new NavbarTestFunctions();

describe('Root.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1080, 1920);
  });

  it.only('render welcomePage PL', () => {
    WelcomePage.testWelcomePageContentPL();
  });

  it.only('render welcomePage EN', () => {
    WelcomePage.testWelcomePageContentEN();
  });

  it.only('render MainPanel after WelcomePage click PL', () => {
    WelcomePage.showMain();
    Header.testHeaderContentPL();
    MainPanel.testMainPanelContentPL();
    Navbar.testNavbarContent();
  });

  it.only('render MainPanel after WelcomePage click EN', () => {
    WelcomePage.showMain();
    Header.testHeaderContentEN();
    MainPanel.testMainPanelContentEN();
    Navbar.testNavbarContent();
  });

  it.only('navigating to modules', () => {
    WelcomePage.showMain();
    MainPanel.testOnClickNavigations();
  });

  it.only('navbar navigation', () => {
    WelcomePage.showMain();
    Navbar.testNavbarNavigationToHome();
    Navbar.testNavbarNavigationBack();
    Navbar.testNavbarNavigationForward();
  });
});
