feat/create-welcome-page-and-set-up-redux
import { WelcomePageTestFunctions } from 'cypress/utils/WelcomePage/WelcomePageTestFunctions';
import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MainPanelTestFunctions } from 'cypress/utils/MainPanel/MainPanelTestFunctions';

const HeaderTests = new HeaderTestFunctions();
const MainPanel = new MainPanelTestFunctions();
const WelcomePage = new WelcomePageTestFunctions();

describe('Root.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('render welcomePage', () => {
    WelcomePage.testWelcomePageContent();
  });

  it.only('render MainPanel after WelcomePage click', () => {
    WelcomePage.showMain();
    HeaderTests.testHeaderContent();
    MainPanel.getMainPanel().should('exist');
    MainPanel.getTile('tile').each((tile: React.ReactNode, index: number, tilesList: React.ReactNode[]) => {
      expect(tilesList).to.have.length(7);
    });
  });
});
