/// <reference types="cypress" />
// fixture usage example
describe('OHRM Add Employee Fixture Test', () => {
    it('should add a new employee successfully', () => {
        // Visit the OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('userdata').then((user) => {
            // user represents the JSON object from userdata.json fixture file
            cy.get('.oxd-form').then(($form) => {
                cy.wrap($form).find('input[name="username"]').type(user.username);
                cy.wrap($form).find('input[name="password"]').type(user.password);
                cy.wrap($form).find('button[type="submit"]').click();
            });
        });
    });
});