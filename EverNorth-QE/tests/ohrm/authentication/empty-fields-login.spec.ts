// spec: specs/orangehrm-employee-management.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {
  test('Empty Fields Login Validation', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Leave username field empty
    // Leave password field empty
    
    // Click Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify validation messages
    await expect(page.getByText('Required')).toBeVisible();

    // Form does not submit - User remains on login page
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // Fields are highlighted to indicate required (validation messages appear)
    await expect(page.getByText('Required')).toBeVisible();
  });
});