const buttonPage = require("../../../pages/ButtonPage");

// test suite name
describe('Button Integration Tests', function () {
    
   beforeEach(() => {
      
      cy.visit('https://www.tutorialspoint.com/selenium/practice/buttons.php');
   });

   it('Click Me Button', () => {
      
      buttonPage.elements.clickMeButton().click();
      cy.get('#welcomeDiv').should('contain.text', "You have done a dynamic click");
   });
});