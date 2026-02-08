import { test, expect } from '@playwright/test';

// syntax of playwright test
/*
 test('description', async ({ page }) => {
  // write test steps
 });
*/


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('login to orangehrm', async ({ page }) => {

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