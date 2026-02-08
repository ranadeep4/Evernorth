/// <reference types="cypress" />
describe('OHRM Add Employee Test', () => {
    it('should add a new employee successfully', () => {
        // Visit the OrangeHRM login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Log in with admin credentials
        cy.get('input[name="username"]').type('admin').then(($userName) => {
            expect($userName).to.have.value('admin');
            cy.log('Username input value verified');
        });
        cy.get('input[name="password"]').type('admin123').then(($password) => {
            expect($password).to.have.value('admin123');
            cy.log('Password input value verified');
        });
        cy.get('button[type="submit"]').click().then(() => {
            cy.log('Login button clicked');
            // Verify successful login by checking the URL
            cy.url().should('include', '/dashboard/index').then(() => {
                cy.log('Successfully logged in and navigated to dashboard');
            });
        });

        // Navigate to the PIM module
        cy.get('a:contains("PIM")').click().then(() => {
            cy.log('Navigated to PIM module');
        });

        // Click on the "Add Employee" button
        cy.get('button:contains("Add")').click().then(() => {
            cy.log('Add Employee button clicked');
        });

        // Fill in the employee details
        cy.get('input[name="firstName"]').type('John').then(($firstName) => {
            expect($firstName).to.have.value('John');
            cy.log('First Name entered');
        });
        cy.get('input[placeholder="Last Name"]').type('Doe').then(($lastName) => {
            expect($lastName).to.have.value('Doe');
            cy.log('Last Name entered');
        });
        // Save the new employee
        cy.get('button:contains("Save")').click().then(() => {
            cy.log('Save button clicked to add new employee');
            // Verify that the employee was added successfully by checking for the presence of the employee's name on the page
            cy.contains('John Doe').should('be.visible').then(() => {
                cy.log('New employee John Doe added successfully');
                // get employee id by reading value attribute of input field next to label Employee Id
                cy.get('label:contains("Employee Id")').parent().parent().find('input').first().should('have.attr', 'value').and('not.to.be.empty');

            });
        });

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
            cy.get('div[role="row"]:contains(' + empId + ')').find('input[type="checkbox"]').check({ force: true });
            // cy.get('div[role="row"]').contains('John Doe').find('input[type="checkbox"]').check();

            cy.wait(5000)// wait for 5 seconds to see the selected checkbox

            // Click on the Delete button
            cy.get('button:contains("Delete Selected")').click();

            // Confirm the deletion in the modal dialog
            cy.get('button:contains("Yes, Delete")').click();

        });
    });
});