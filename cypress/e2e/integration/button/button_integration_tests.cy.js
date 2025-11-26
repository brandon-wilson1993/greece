// test suite name
describe('Button Integration Tests', function () {
    
   beforeEach(() => {
      
      cy.visit('https://www.tutorialspoint.com/selenium/practice/buttons.php');
   });

   it('Click Me Button', () => {
      
      cy.get('.btn.btn-primary').click();
      cy.get('#welcomeDiv').should('contain.text', "You have done a dynamic click");
   });
});