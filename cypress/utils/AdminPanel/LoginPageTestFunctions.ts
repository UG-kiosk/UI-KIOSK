export class LoginPageTestFunctions {
  getAdminLoginForm = () => cy.getBySelector('admin-login-form');

  getUsernameLabel = () => cy.getBySelector('username-label');

  getUsernameInput = () => cy.getBySelector('username-input');

  getUsernameError = () => cy.getBySelector('username-error');

  getPasswordLabel = () => cy.getBySelector('password-label');

  getPasswordInput = () => cy.getBySelector('password-input');

  getPasswordError = () => cy.getBySelector('password-error');

  getLoginButton = () => cy.getBySelector('login-button');

  typeToUsername = (username: string) => this.getUsernameInput().type(username);

  typeToPassword = (password: string) => this.getPasswordInput().type(password);

  submitForm = () => this.getLoginButton().click();

  testLoginPageContent = () => {
    this.getAdminLoginForm().should('exist');
    this.getUsernameLabel().should('exist');
    this.getUsernameInput().should('exist');
    this.getUsernameError().should('not.exist');
    this.getPasswordLabel().should('exist');
    this.getPasswordInput().should('exist');
    this.getPasswordError().should('not.exist');
    this.getLoginButton().should('exist');
  };
}
