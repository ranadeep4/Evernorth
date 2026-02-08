// Playwright Test Framework Example Test File
// This file demonstrates basic usage of Playwright Test features.
// It includes test definitions, hooks, and assertions.

//Defining a simple test to verify page title
import { test, expect } from '@playwright/test';
test('basic test to verify page title', async ({ page }) => {
    // Navigate to example.com
    await page.goto('https://example.com');
    // Assert that the page title is correct
    await expect(page).toHaveTitle('Example Domain');
});

// Test fixtures are used to establish the environment for each test
// Defining a test suite with multiple tests with setup and teardown hooks

// Built-in fixtures are page, browser, context, etc.

// Implement beforeall, afterall, beforeeach, and aftereach hooks
test.describe('OrangeHRM Tests', () => {

    test.beforeAll(async ({ browser }) => {
        // Runs once before all tests in the suite
        const page = await browser.newPage();
    });
    
    test.afterAll(async ({ page }) => {
        // Runs once after all tests in the suite
    
        await page.close();
    });

    test.afterAll(async ({ browser }) => {
        // Runs once after all tests in the suite
        const page = await browser.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.close();
    });

    // Hook to run before each test in this suite
    test.beforeEach(async ({ page }) => {
        // Go to orangehrm demo site
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Enter username
        await page.getByPlaceholder('Username').fill('Admin');
        // Enter password
        await page.getByPlaceholder('Password').fill('admin123');
        // Click login button
        await page.getByRole('button', { name: 'Login' }).click();
        // Verify that dashboard is visible
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    });


    test.afterEach(async ({ page }) => {
        // Log out after each test
        await page.getByRole('button', { name: 'Logout' }).click();
    });

    // Test to check the presence of a specific element
    test('Add Employee', async ({ page }) => {
        // Navigate to PIM module
        await page.getByRole('link', { name: 'PIM' }).click();
        // Click on Add Employee button
        await page.getByRole('button', { name: 'Add Employee' }).click();
        // Fill in employee details
        await page.getByPlaceholder('First Name').fill('John');
        await page.getByPlaceholder('Last Name').fill('Doe');
        // Save the new employee
        await page.getByRole('button', { name: 'Save' }).click();
        // Verify that the employee was added successfully
        await expect(page.getByText('Personal Details')).toBeVisible();    
    });
    // Test to check the presence of a link
    test('check for more information link', async ({ page }) => {
        
    });
});

