export class MainPanelTestFunctions {
  getMainPanel = () => cy.getBySelector('main-panel');

  getTile = (selector: string) => cy.getBySelector(selector);
}
