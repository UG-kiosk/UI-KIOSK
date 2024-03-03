import { API_URL } from 'cypress/constants';
import { news_page } from '../../../fixtures/news';

export class NewsDetailsTestFunctions {
  mockGETNewsDetails = () => {
    cy.intercept('GET', API_URL + '/news/657785edb09d333037f7c1b5', {
      statusCode: 200,
      body: news_page[0],
    }).as('getDetailsNews');
    cy.wait('@getDetailsNews');
  };

  private getNewsTitle = () => cy.getBySelector('news-title');
  private getNewsInfo = () => cy.getBySelector('news-info');
  private getNewsImage = () => cy.getBySelector('news-img');
  private getNewsContent = () => cy.getBySelector('news-content');

  testNewsDetailsPL = () => {
    this.getNewsTitle().should('exist');
    this.getNewsTitle().contains('WYKŁAD OTWARTY');
    this.getNewsInfo().should('exist');
    this.getNewsInfo().contains(' • 08-12-2023 • MFI');
    this.getNewsImage().should('exist');
    this.getNewsImage().should('have.length', 1);
    this.getNewsContent().should('exist');
    this.getNewsContent().contains(
      'Instytut Fizyki Teoretycznej i Astrofizyki wraz z Międzynarodowym Centrum Teorii Technologii Kwantowych zapraszają na wykład otwarty prof. Macieja Wojtkowskiego pt. „Control of spatial and temporal coherence of light used for imaging in scattering media”. Wykład w języku angielskim odbędzie się 15 grudnia 2023 roku o godz. 14.00 w audytorium 1.14 budynku Instytutu Informatyki UG. Prof. Maciej Wojtkowski jest Kierownikiem Międzynarodowego Centrum Badań Oka utworzonego przy Instytucie Chemii Fizycznej Polskiej Akademii Nauk oraz Liderem Zespołu Optyki Fizycznej i Biofotoniki. Prof. Wojtkowski jest ekspertem w dziedzinie obrazowania biomedycznego. Jego zainteresowania badawcze obejmują Tomografię optyczną OCT i interferometrię stosowaną w obrazowaniu biomedycznym. Jego badania mają znaczący wpływ na rozwój techniki Fouriera w dziedzinie OCT (FdOCT). Za opracowanie i wprowadzenie do praktyki okulistycznej metody tomografii optycznej z detekcją fourierowską w 2012 został wyróżniony Nagrodą Fundacji na rzecz Nauki Polskiej Abstract: As part of our work, we developed a new way to describe the effect of spatial light coherence control on imaging in turbid media. As a result, we developed a new tool for imaging biological objects, which we called spatial-temporal optical coherence tomography (STOC-T). In particular, the removal of optical field perturbations caused by optical inhomogeneities of the medium (biological tissue) allows us to image the deeper layers of the sample non-invasively. This unique feature also allows us to quantitatively analyze the dynamics of blood flow in the deep layers of the sample. The new STOC-T method for imaging biological structures of the eye enables in-vivo imaging with microscopic accuracy, but the final imaging results require additional iterative geometric aberration correction algorithms to obtain sharp images.',
    );
  };

  private getErrorMessage = () => cy.getBySelector('error-message');

  testDetailsContentOnRequestError = () => {
    cy.intercept('GET', API_URL + '/news/657785edb09d333037f7c1b5', {
      statusCode: 500,
    }).as('newsDetails');
    this.getErrorMessage().should('exist');
  };
}
