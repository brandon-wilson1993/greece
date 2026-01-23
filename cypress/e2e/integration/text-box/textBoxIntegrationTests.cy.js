import textBoxPage from "../../../pages/textBoxPage";

describe('Text Box Integration Tests', function () {
    
   beforeEach(() => {
      
      cy.visit('https://www.tutorialspoint.com/selenium/practice/text-box.php');
   });

   it('Address Correctly Displayed', () => {
      
      const address = '123 Testing Avenue 60443';

      textBoxPage.elements.address().type(address).press('Tab');
      textBoxPage.elements.address().should('have.value', address);
   });

   it('Email Correctly Displayed', () => {

      const email = 'testing@gmail.com';

      textBoxPage.elements.email().type(email).press('Tab');
      textBoxPage.elements.email().should('have.value', email);
   });

   it('Fill Out Page and Click Submit', () => {

      const address = '123 Testing Avenue 60443';
      const email = 'testing@gmail.com';
      const fullName = 'Testing';
      const password = 'Password123';

      textBoxPage.fillOutThenClickSubmit(fullName, email, address, password);

      cy.get('#fullname').should('have.value', '');
      cy.get('#email').should('have.value', '');
      cy.get('#address').should('have.value', '');
      cy.get('#password').should('have.value', '');
   });

   it('Fullname Correctly Displayed', () => {

      const fullName = 'Testing';

      textBoxPage.elements.fullName().type(fullName).press('Tab');
      textBoxPage.elements.fullName().should('have.value', fullName);
   });

   it('Password Correctly Displayed', () => {

      const password = 'Password123';

      textBoxPage.elements.password().type(password).press('Tab');
      textBoxPage.elements.password().should('have.value', password);
   });
});