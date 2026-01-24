class textBoxPage {

    elements = {
        
        address: () => cy.get('#address'),
        email: () => cy.get('#email'),
        fullName: () => cy.get('#fullname'),
        password: () => cy.get('#password'),
        submitButton: () => cy.get('input[type="submit"]')
    }

    fillOutThenClickSubmit(fullName, email, address, password) {
        
        this.elements.fullName().type(fullName).press('Tab');
        this.elements.email().type(email).press('Tab');
        this.elements.address().type(address).press('Tab');
        this.elements.password().type(password).press('Tab');

        this.elements.submitButton().click();
    }
}

module.exports = new textBoxPage();