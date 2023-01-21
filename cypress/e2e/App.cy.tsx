import { WelcomePageTestFunctions } from 'cypress/utils/WelcomePage/WelcomePageTestFunctions';
import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MainPanelTestFunctions } from 'cypress/utils/MainPanel/MainPanelTestFunctions';
import { StaffPageTestFunctions } from 'cypress/utils/StaffPage/StaffPageTestFunctions';

const Header = new HeaderTestFunctions();
const MainPanel = new MainPanelTestFunctions();
const WelcomePage = new WelcomePageTestFunctions();
const StaffPage = new StaffPageTestFunctions();

describe('Root.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/');
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
    MainPanel.getMainPanel().should('exist');
    MainPanel.getTile('tile').each((tile: React.ReactNode, index: number, tilesList: React.ReactNode[]) => {
      expect(tilesList).to.have.length(7);
    });
  });

  it.only('render MainPanel after WelcomePage click EN', () => {
    WelcomePage.showMain();
    Header.testHeaderContentEN();
    MainPanel.getMainPanel().should('exist');
    MainPanel.getTile('tile').each((tile: React.ReactNode, index: number, tilesList: React.ReactNode[]) => {
      expect(tilesList).to.have.length(7);
    });
  });

  it.only('render staff Tile on Main Page', () => {
    WelcomePage.showMain();
    StaffPage.testTileContentPL();
    StaffPage.testTileContentEN();
    StaffPage.testNavigationToStaffPage();
  });
});
