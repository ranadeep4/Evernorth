/// <reference types="cypress" />
describe('OHRM Add Employee Test', () => {
    it('should add a new employee successfully', () => {
        // Visit the OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Log in with admin credentials
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        // Verify successful login by checking the URL
        cy.url().should('include', '/dashboard/index');
        // Navigate to the PIM module
        cy.get('a:contains("PIM")').click();
        // Click on the "Add Employee" button
        cy.get('button:contains("Add")').click();
        // Fill in the employee details
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[placeholder="Last Name"]').type('Doe');
        // Save the new employee
        cy.get('button:contains("Save")').click();

        // Verify that the employee was added successfully by checking for the presence of the employee's name on the page
        cy.contains('John Doe').should('be.visible');

        // get employee id by reading value attribute of input field next to label Employee Id

        cy.get('label:contains("Employee Id")').parent().parent().find('input').first().should('have.attr', 'value').and('not.to.be.empty');
        
        cy.wait(5000)// wait for 5 seconds to see the added employee details
        cy.get('label:contains("Employee Id")').parent().parent().find('input').first().invoke('val').then((empId) => {
            cy.log('Employee ID: ' + empId);
        
        
        // delete the added employee to maintain test idempotency

        // Search for the employee in the employee list
        cy.get('a:contains("Employee List")').click();
        cy.get('label:contains("Employee Id")').parent().parent().find('input').first().type(empId); // click on the search icon
        // cy.get('input[placeholder="Type for hints..."]').type('John Doe');
        cy.get('button:contains("Search")').click();

        // Select the employee specific checkbox based on the displayed results

        // find employee row div that has role=row and contains emp id
        cy.get('div[role="row"]:contains('+empId+')').find('input[type="checkbox"]').check({force: true});
        // cy.get('div[role="row"]').contains('John Doe').find('input[type="checkbox"]').check();

        cy.wait(5000)// wait for 5 seconds to see the selected checkbox

        // Click on the Delete button
        cy.get('button:contains("Delete Selected")').click();

        // Confirm the deletion in the modal dialog
        cy.get('button:contains("Yes, Delete")').click();
        
        });
    });
});