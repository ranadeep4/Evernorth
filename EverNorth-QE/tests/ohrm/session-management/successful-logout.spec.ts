// spec: specs/orangehrm-employee-management.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Session Management Tests', () => {
  test('Successful Logout Flow', async ({ page }) => {
    // Login with valid credentials
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for dashboard to load
    await expect(page).toHaveURL(/.*dashboard/);

    // Navigate to any internal page (PIM module)
    await page.getByRole('link', { name: 'PIM' }).click();

    // Click on user profile in top right corner
    await page.locator('span').filter({ hasText: 'adithya who' }).click();

    // Verify dropdown menu appears with logout option
    await expect(page.getByRole('menuitem', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Support' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Change Password' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();

    // Click 'Logout' option
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // Wait for redirect to login page
    await expect(page).toHaveURL(/.*auth\/login/);

    // User session is terminated - User is redirected to login page
    await expect(page.getByRole('textbox', { name: 'username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // Attempting to navigate to internal pages redirects to login (session cookies/tokens are cleared)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page).toHaveURL(/.*auth\/login/);
  });
});