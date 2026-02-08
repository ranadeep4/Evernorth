/// <reference types="cypress" />
describe('OHRM Add Employee Test', () => {
    it('should add a new employee successfully', () => {
        // Visit the OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        //form with in
        // cy.get('.oxd-form').within(($form) => {
        //   // Log in with admin credentials
        //   cy.get('input[name="username"]').type('admin');
        //   cy.get('input[name="password"]').type('admin123');
        //   cy.get('button[type="submit"]').click();

        //  // in within cy.get is limited to the form context

        // });

        // Form with then
        cy.get('.oxd-form').then(($form) => {
          // Log in with admin credentials
          cy.wrap($form).find('input[name="username"]').type('admin');
          cy.wrap($form).find('input[name="password"]').type('admin123');
          cy.wrap($form).find('button[type="submit"]').click();

          // in then cy.get continues to work outside the form context
          // that means from root level of the DOM
        });

    });
});