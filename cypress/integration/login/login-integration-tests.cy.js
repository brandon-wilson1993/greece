const loginPage = require("../../pages/login/login-page");

describe("Login Integration Tests", function () {
  beforeEach(() => {
    cy.intercept("POST", "/auth").as("loginRequest");
  });

  it("Valid username and password logs in correctly", () => {
    loginPage.elements.username().type("testuser");
    loginPage.elements.password().type("Password123!");
    loginPage.elements.loginButton().click();

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);
  });

  it("Username is required", () => {
    loginPage.elements.loginButton().click();
    loginPage.elements
      .error()
      .should("have.text", "Please enter your username");
  });

  it("Password is required", () => {
    loginPage.elements.username().type("test");
    loginPage.elements.loginButton().click();
    loginPage.elements
      .error()
      .should("have.text", "Please enter your password");
  });

  it("Password is incorrect", () => {
    loginPage.elements.username().type("testuser");
    loginPage.elements.password().type("wrongpassword");
    loginPage.elements.loginButton().click();
    loginPage.elements
      .error()
      .should("have.text", "Username or password is incorrect");

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 401);
  });

  it("Username is incorrect", () => {
    loginPage.elements.username().type("wrong");
    loginPage.elements.password().type("wrongpassword");
    loginPage.elements.loginButton().click();
    loginPage.elements
      .error()
      .should("have.text", "Username or password is incorrect");

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 401);
  });
});
