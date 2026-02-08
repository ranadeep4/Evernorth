/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.url().should('include', '/dashboard/index')
    // Playwright vs Cypress methods
    // cy.get('selector').click()  --> Playwright: page.click('selector')
    // cy.get('selector').type('text')  --> Playwright: page.fill('selector', 'text')
    // cy.url().should('include', 'text')  --> Playwright: expect(page).toHaveURL(/text/)
    // cy.get('selector').should('be.visible')  --> Playwright: await expect(page.locator('selector')).toBeVisible()
    // Navigation actions
    // cy.visit('url')  --> Playwright: await page.goto('url')
    // cy.go('back')  --> Playwright: await page.goBack()
    // cy.go('forward')  --> Playwright: await page.goForward()
    // Locator strategies
    // cy.get('#id')  --> Playwright: page.locator('#id')
    // cy.get('.class')  --> Playwright: page.locator('.class')
    // cy.get('[attribute="value"]')  --> Playwright: page.locator('[attribute="value"]')
    // Cypress will use jQuery under the hood for DOM manipulation and assertions, while Playwright uses its own API for similar tasks.

    // Cypress commands are asynchronous and are queued, whereas Playwright commands are awaited.
    // Cypress has built-in retry-ability for commands and assertions, while Playwright requires explicit waits or assertions.
    // Cypress tests run in the browser, while Playwright tests can run in multiple browsers and contexts.
    // Cypress has a more straightforward setup for end-to-end testing, while Playwright offers more flexibility and control over browser contexts and sessions.
    // Cypress has a rich ecosystem of plugins and extensions, while Playwright is relatively newer with a growing ecosystem.
    // Cypress provides a GUI test runner for interactive debugging, while Playwright tests are typically run via command line or CI/CD pipelines.
    // Playwright Has UI Mode now which is similar to Cypress Test Runner.

    // Overall, both Cypress and Playwright are powerful tools for end-to-end testing, but they have different philosophies and approaches to testing web applications.

    // Element actions using Cypress vs Playwright
    // cy.get('selector').click()  --> Playwright: await page.click('selector')
    // cy.get('selector').dblclick()  --> Playwright: await page.dblclick('selector')
    // cy.get('selector').rightclick()  --> Playwright: await page.click('selector', { button: 'right' })
    // cy.get('selector').type('text')  --> Playwright: await page.fill('selector', 'text')
    // cy.get('selector').clear()  --> Playwright: await page.fill('selector', '')
    // cy.get('selector').select('value')  --> Playwright: await page.selectOption('selector', 'value')
    // cy.get('selector').check()  --> Playwright: await page.check('selector')
    // cy.get('selector').uncheck()  --> Playwright: await page.uncheck('selector')
    // cy.get('selector').hover()  --> Playwright: await page.hover('selector')
    // cy.get('selector').scrollIntoView()  --> Playwright: await page.locator('selector').scrollIntoViewIfNeeded()
    // cy.get('selector').focus()  --> Playwright: await page.focus('selector')
    // cy.get('selector').blur()  --> Playwright: await page.locator('selector').evaluate(el => el.blur())
    // cy.get('selector').trigger('event')  --> Playwright: await page.locator('selector').dispatchEvent('event')
    // cy.get('selector').screenshot()  --> Playwright: await page.locator('selector').screenshot()

    // working with js alerts, popups in Cypress vs Playwright

    // In Playwright, you would use page.on('dialog', ...) to handle alerts and popups.
    // Example:
    // page.on('dialog', async dialog => {
    //   console.log(dialog.message());
    //   await dialog.accept();
    // });
    // Then trigger the action that causes the dialog to appear.
    // Note: Cypress automatically handles alerts and popups, while in Playwright you need to set up event listeners.

    // working file upload in Cypress vs Playwright

    // In Playwright, you can use the setInputFiles method to handle file uploads.
    // Example:
    // await page.setInputFiles('input[type="file"]', 'path/to/file.txt');
    // This will set the specified file to the file input element.

    // in cypress, you can use the cypress-file-upload plugin to handle file uploads.

    // working with iframes in Cypress vs Playwright

    // In Playwright, you can use the frameLocator method to interact with iframes.
    // Example:
    // const frame = page.frameLocator('iframe-selector');
    // await frame.locator('selector-inside-iframe').click();
    // This allows you to interact with elements inside the iframe directly.

    // In Cypress, you would typically use the cy.iframe() command from the cypress-iframe plugin to work with iframes.

    // working with multiple tabs in Cypress vs Playwright

    // In Playwright, you can use the context.newPage() method to open a new tab.
    // Example:
    // const newPage = await context.newPage();
    // await newPage.goto('https://example.com');
    // This allows you to work with multiple tabs by creating new page instances.

    // In Cypress, handling multiple tabs is more limited, and you often need to work around it by stubbing or intercepting requests.
    // Cypress does not natively support multiple tabs like Playwright does.

    // working with waits in Cypress vs Playwright

    // In Playwright, you can use explicit waits like page.waitForSelector('selector') or page.waitForTimeout(milliseconds).
    // Example:
    // await page.waitForSelector('#element-id');
    // This will wait until the specified element is visible in the DOM.

    // In Cypress, commands are automatically retried until they succeed or time out, so explicit waits are less commonly needed.
    // However, you can still use cy.wait(milliseconds) for fixed delays if necessary.

    // Tradeoff between Cypress and Playwright

    // Cypress is easier to set up and has a more user-friendly interface, making it ideal for beginners and quick test development.
    // Playwright offers more flexibility and control over browser contexts, making it suitable for complex testing scenarios and cross-browser testing.
    // Cypress has a rich ecosystem of plugins and extensions, while Playwright is relatively newer with a growing ecosystem.
    // Cypress tests run in the browser, while Playwright tests can run in multiple browsers and contexts.
    // Overall, the choice between Cypress and Playwright depends on the specific needs of the project, team expertise, and testing requirements.

    // Perminent limitations of Cypress
    // Cypress only supports testing in Chromium-based browsers, Firefox, and WebKit, limiting cross-browser testing capabilities.
    // Cypress runs tests within the browser, which can lead to limitations in accessing certain browser APIs and features.
    // Cypress has limited support for multi-tab and multi-origin testing, making it challenging to test applications that rely on these features.
    // Cypress's automatic waiting and retry-ability can sometimes lead to unexpected behavior and make debugging more difficult.
    // Cypress has a smaller community and ecosystem compared to some other testing frameworks, which may limit the availability of plugins and resources.
    // Cypress tests can be slower to execute compared to other frameworks due to its architecture and design choices.
    // Cypress has limited support for mobile testing, making it less suitable for applications that require extensive mobile device testing.
    // Cypress's reliance on JavaScript can be a limitation for teams that prefer or require testing in other programming languages.

    // Bundled tools with Cypress vs Playwright

    // Cypress bundled tools
    // Cypress relies on many open source testing libraries to lend stability and functionality to its core framework. Some of these include:
    // Mocha: A JavaScript test framework for structuring and running tests.
    // Chai: An assertion library that provides a variety of assertion styles for validating test outcomes.
    // Sinon: A library for creating spies, stubs, and mocks to facilitate testing of asynchronous code and external dependencies.
    // Lodash: A utility library that provides helpful functions for manipulating arrays, objects, and other data types.
    // jQuery: A fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation.

    // The playwright is fully self-contained and does not rely on external libraries for its core functionality
    // It has its own test runner called Playwright Test, which provides features like test organization, parallel execution, and reporting.
    // Playwright also includes its own assertion library, which allows you to write assertions directly within your tests without needing an external library like Chai.
    // Playwright has built-in support for mocking and intercepting network requests, eliminating the need for external libraries like Sinon.
    // Playwright provides its own set of utility functions for common tasks like waiting for elements, handling timeouts, and managing browser contexts, reducing the need for libraries like Lodash.
    // Overall, while Cypress relies on several external libraries to provide its functionality, Playwright is designed to be a self-contained testing framework with built-in tools and features.

  })
})