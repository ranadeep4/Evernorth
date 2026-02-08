// spec: specs/orangehrm-employee-management.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {
  test('Invalid Credentials Login', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter 'InvalidUser' in username field
    await page.getByRole('textbox', { name: 'username' }).fill('InvalidUser');

    // Enter 'WrongPassword' in password field
    await page.getByRole('textbox', { name: 'password' }).fill('WrongPassword');

    // Click Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify error message appears
    await expect(page.getByText('Invalid credentials')).toBeVisible();

    // User remains on login page - Login button remains clickable for retry
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});