class loginPage {
  elements = {
    username: () => cy.get("#username"),
    password: () => cy.get("#password"),
    loginButton: () => cy.get("#loginButton"),
    error: () => cy.get("#errorMessage"),
  };
}

module.exports = new loginPage();
