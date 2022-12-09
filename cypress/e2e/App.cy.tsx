import { MainPanelTestFunctions } from 'cypress/utils/MainPanel/MainPanelTestFunctions';

const MainPanel = new MainPanelTestFunctions();

describe('Root.cy.tsc', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('render Header', () => {
    cy.getBySelector('header').should('exist');
  });

  it('display images in Header', () => {
    cy.getBySelector('header-grid')
      .find('img')
      .should('be.visible')
      .each((img: { naturalWidth: number }[]) => {
        expect(img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it('display vertical lines in Header', () => {
    cy.getBySelector('header-grid').find('div').should('be.visible');
  });

  it('render MainPanel', () => {
    MainPanel.getMainPanel().should('exist');
    MainPanel.getTile('tile').each((tile: React.ReactNode, index: number, tilesList: React.ReactNode[]) => {
      expect(tilesList).to.have.length(7);
    });
  });
});
