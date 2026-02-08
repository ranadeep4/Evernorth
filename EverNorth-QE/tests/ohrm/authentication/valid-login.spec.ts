// spec: specs/orangehrm-employee-management.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {
  test('Valid Login Flow', async ({ page }) => {
    // Navigate to OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify login page elements are visible (username field, password field, Login button)
    await expect(page.getByRole('textbox', { name: 'username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // Enter 'Admin' in username field
    await page.getByRole('textbox', { name: 'username' }).fill('Admin');

    // Enter 'admin123' in password field
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');

    // Click Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for dashboard to load
    await expect(page).toHaveURL(/.*dashboard/);

    // Dashboard displays with PIM, Admin, Leave, Time modules visible
    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Time' })).toBeVisible();

    // User profile shows logged in user name in top right
    await expect(page.getByText('adithya who')).toBeVisible();
  });
});