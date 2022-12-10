import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { MainPanelTestFunctions } from 'cypress/utils/MainPanel/MainPanelTestFunctions';

const Header = new HeaderTestFunctions();
const MainPanel = new MainPanelTestFunctions();

describe('Root.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('render Header', () => {
    Header.renderHeader();
  });

  it('render MainPanel', () => {
    MainPanel.getMainPanel().should('exist');
    MainPanel.getTile('tile').each((tile: React.ReactNode, index: number, tilesList: React.ReactNode[]) => {
      expect(tilesList).to.have.length(7);
    });
  });
});
