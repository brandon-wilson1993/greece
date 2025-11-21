const homePage = require("../pages/homePage");

// test suite name
describe('Target Home Screen Test', function () {
    
   it('Search Bar Appears', function (){
      // test step for URL launching
      homePage.components.search().should('be.enabled');
   });

   it('Account Appears', function (){
      // test step for URL launching
      homePage.components.accountSignIn().should('be.visible');
   });
});