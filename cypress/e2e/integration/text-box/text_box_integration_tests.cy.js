describe('Text Box Integration Tests', function () {
    
   beforeEach(() => {
      
      cy.visit('https://www.tutorialspoint.com/selenium/practice/text-box.php');
   });

   it('Address Correctly Displayed', () => {
      
      const address = '123 Testing Avenue 60443';

      cy.get('#address').type(address).press('Tab');
      cy.get('#address').should('have.value', address);
   });

   it('Email Correctly Displayed', () => {

      const email = 'testing@gmail.com';

      cy.get('#email').type(email).press('Tab');
      cy.get('#email').should('have.value', email);
   });

   it('Fill Out Page and Click Submit', () => {

      const address = '123 Testing Avenue 60443';
      const email = 'testing@gmail.com';
      const fullName = 'Testing';
      const password = 'Password123';

      cy.get('#fullname').type(fullName).press('Tab');
      cy.get('#email').type(email).press('Tab');
      cy.get('#address').type(address).press('Tab');
      cy.get('#password').type(password).press('Tab');

      cy.get('input[type="submit"]').click();

      cy.get('#fullname').should('have.value', '');
      cy.get('#email').should('have.value', '');
      cy.get('#address').should('have.value', '');
      cy.get('#password').should('have.value', '');
   });

   it('Fullname Correctly Displayed', () => {

      const fullName = 'Testing';

      cy.get('#fullname').type(fullName).press('Tab');
      cy.get('#fullname').should('have.value', fullName);
   });

   it('Password Correctly Displayed', () => {

      const password = 'Password123';

      cy.get('#password').type(password).press('Tab');
      cy.get('#password').should('have.value', password);
   });
});