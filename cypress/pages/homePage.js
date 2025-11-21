class homePage {

    components = {

        accountSignIn : () => cy.get('#account-sign-in'),
        search : () => cy.get('#search'),

    }
}

module.exports = new homePage();