/// <reference types="cypress" />
// fixture alias usage example
describe('OHRM Add Employee Fixture Alias Test', () => {

    beforeEach(() => {
        // load userdata.json fixture file and store
        // in the test context object
        cy.fixture('userdata.json').as('user');
    });

    it('should add a new employee successfully', () => {
        // Visit the OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        
        cy.get('@user').then((user) => {
            // user represents the JSON object from userdata.json fixture file
            cy.get('.oxd-form').then(($form) => {
                cy.wrap($form).find('input[name="username"]').type(user.username).then(() => {
                    cy.log(`Username ${user.username} entered from fixture alias`);
                });
                cy.wrap($form).find('input[name="password"]').type(user.password);
                cy.wrap($form).find('button[type="submit"]').click();
            });
        });

    });
});