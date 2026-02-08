// Datadriving in Playwright Test Automation
// What is data-driven testing?
// Data-driven testing is a software testing methodology where test scripts read test data from external sources such as files, databases, or spreadsheets. This allows testers to run the same test logic with different sets of input data, enhancing test coverage and efficiency.

// Benefits of data-driven testing
// 1. Reusability: Test scripts can be reused with different data sets without modification.
// 2. Maintainability: Test data is separated from test logic, making it easier to update and manage.
// 3. Enhanced Coverage: Multiple scenarios can be tested by simply changing the input data.
// 4. Efficiency: Reduces the number of test scripts needed, saving time and effort.

// Implementing data-driven testing in Playwright Test
// Playwright Test provides several ways to implement data-driven testing, including using test fixtures, reading from external files, and utilizing test.each for parameterized tests.
// Example of data-driven testing using test.each

import { test, expect } from '@playwright/test';
const testData = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
  { username: 'user3', password: 'pass3' },
];
test.describe('Data-Driven Tests', () => {
  testData.forEach(({ username, password }) => {
    test(`Login test for ${username}`, async ({ page }) => {
        await page.goto('https://example.com/login');
        await page.fill('#username', username);
        await page.fill('#password', password);
        await page.click('#loginButton');
        // Add assertions to verify successful login
        await expect(page).toHaveURL('https://example.com/dashboard');
    });
  });
});

// Example of reading test data from an external JSON file
// testData.json
/*
[
  { "username": "user1", "password": "pass1" },
  { "username": "user2", "password": "pass2" },
  { "username": "user3", "password": "pass3" }
]
*/
// We can read data from different file formats like JSON, CSV, or Excel using appropriate libraries (e.g., fs for JSON, csv-parser for CSV, xlsx for Excel).