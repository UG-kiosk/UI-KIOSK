import { MainPanelTestFunctions } from 'cypress/utils/MainPanel/MainPanelTestFunctions';

const MainPanel = new MainPanelTestFunctions();

describe('Root.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('hello world', () => {
    cy.getBySelector('hello-world-p').contains('Hello World');
  });

  it('render MainPanel', () => {
    MainPanel.getMainPanel().should('exist');
    MainPanel.getTile('tile').each((tile: React.ReactNode, index: number, tilesList: React.ReactNode[]) => {
      expect(tilesList).to.have.length(7);
    });
  });
});
