class dashboardPage {
  elements = {
    savingsCard: () => cy.get("#accountsList > div[data-type='SAVINGS']"),
    checkingCard: () => cy.get("#accountsList > div[data-type='CHECKING']"),
    tradingCard: () => cy.get("#accountsList > div[data-type='TRADING']"),
  };
}

module.exports = new dashboardPage();
