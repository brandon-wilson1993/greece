const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/e2e/**/*.cy.js",
      "cypress/integration/**/*.cy.js"
    ]
  },

  component: {
    specPattern: [
      "cypress/component-tests/**/*.cy.js"
    ]
  },
});
