///<reference types="cypress" />
// Working with Frames and Drag and Drop

describe('Drag and Drop Test', () => {
    it('should perform drag and drop successfully', () => {
        // Visit the jQuery UI Droppable page
        cy.visit('https://jqueryui.com/droppable/');
        // Handle frame
        cy.get('iframe.demo-frame').then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).as('iframeBody'); // Alias for easier access

        });
        // Using $ to refer to jQuery object inside the iframe
        // USe @ to refer to alias

        // Perform drag and drop
        cy.get('@iframeBody').find('#draggable').trigger('mousedown', { which: 1 });
        cy.get('@iframeBody').find('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
        // Verify that the drop was successful
        cy.get('@iframeBody').find('#droppable p').should('have.text', 'Dropped!');
        cy.wait(5000); // wait for 5 seconds to see the result
    });
});
// Run Command without cypress open
// npx cypress run --spec "cypress/e2e/practice/test3DragAndDrop.cy.js"
// Run with headless mode off
// npx cypress run --headed --spec "cypress/e2e/practice/test3DragAndDrop.cy.js"