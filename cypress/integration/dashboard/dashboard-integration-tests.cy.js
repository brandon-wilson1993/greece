const dashboardPage = require("../../pages/dashboard/dashboard-page");
const loginPage = require("../../pages/login/login-page");

describe("Dashboard Integration Tests", function () {
  beforeEach(() => {
    loginPage.elements.username().type("testuser");
    loginPage.elements.password().type("Password123!");
    loginPage.elements.loginButton().click();
  });

  it("Load Savings Account Correctly", () => {
    dashboardPage.elements.savingsCard().should("be.visible");
    dashboardPage.elements
      .savingsCard()
      .find("div[class='account-type-name']")
      .should("have.text", "Savings");
  });

  it("Load Trading Account Correctly", () => {
    dashboardPage.elements.tradingCard().should("be.visible");
    dashboardPage.elements
      .tradingCard()
      .find("div[class='account-type-name']")
      .should("have.text", "Trading");
  });

  it("Load Checking Account Correctly", () => {
    dashboardPage.elements.checkingCard().should("be.visible");
    dashboardPage.elements
      .checkingCard()
      .find("div[class='account-type-name']")
      .should("have.text", "Checking");
  });
});
