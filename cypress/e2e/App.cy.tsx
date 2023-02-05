import { WelcomePageTestFunctions } from 'cypress/utils/WelcomePage/WelcomePageTestFunctions';
import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MainPanelTestFunctions } from 'cypress/utils/MainPanel/MainPanelTestFunctions';
import { StaffPageTestFunctions } from 'cypress/utils/modules/StaffPage/StaffPageTestFunctions';

const Header = new HeaderTestFunctions();
const MainPanel = new MainPanelTestFunctions();
const WelcomePage = new WelcomePageTestFunctions();
const StaffPage = new StaffPageTestFunctions();

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
  });

  it.only('render MainPanel after WelcomePage click EN', () => {
    WelcomePage.showMain();
    Header.testHeaderContentEN();
    MainPanel.testMainPanelContentEN();
  });

  it.only('navigating to modules', () => {
    WelcomePage.showMain();
    MainPanel.testOnClickNavigations();
  });

  it.only('render staff Tile on Main Page', () => {
    WelcomePage.showMain();
    StaffPage.testTileContentPL();
    StaffPage.testTileContentEN();
    StaffPage.testNavigationToStaffPage();
  });
});
