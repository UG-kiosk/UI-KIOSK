export class LoginPageTestFunctions {
  getAdminLoginForm = () => cy.getBySelector('admin-login-form');

  getLoginLabel = () => cy.getBySelector('login-label');

  getLoginInput = () => cy.getBySelector('login-input');

  getLoginError = () => cy.getBySelector('login-error');

  getPasswordLabel = () => cy.getBySelector('password-label');

  getPasswordInput = () => cy.getBySelector('password-input');

  getPasswordError = () => cy.getBySelector('password-error');

  getLoginButton = () => cy.getBySelector('login-button');

  typeToLogin = (login: string) => this.getLoginInput().type(login);

  typeToPassword = (password: string) => this.getPasswordInput().type(password);

  submitForm = () => this.getLoginButton().click();

  testLoginPageContent = () => {
    this.getAdminLoginForm().should('exist');
    this.getLoginLabel().should('exist');
    this.getLoginInput().should('exist');
    this.getLoginError().should('not.exist');
    this.getPasswordLabel().should('exist');
    this.getPasswordInput().should('exist');
    this.getPasswordError().should('not.exist');
    this.getLoginButton().should('exist');
  };
}
