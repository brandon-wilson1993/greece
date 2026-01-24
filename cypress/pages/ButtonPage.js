class buttonPage {

    elements = {
    
        clickMeButton: () => cy.get('.btn.btn-primary'),
    }
}

module.exports = new buttonPage();