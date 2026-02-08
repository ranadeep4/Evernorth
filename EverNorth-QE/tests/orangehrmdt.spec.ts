import { test, expect } from '@playwright/test';
// with type module in package.json
// with introduction of ES modules in Node.js, we can directly import JSON files

import * as ohrmdata from '../src/data/ohrmdata.json' with { type: 'json' };

test('login to orangehrm', async ({ page }) => {
    // Go to orangehrm demo site
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Enter username
    await page.getByPlaceholder('Username').fill(ohrmdata.adminuser.username);
    // Enter password
    await page.getByPlaceholder('Password').fill(ohrmdata.adminuser.password);
    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();
    // Verify that dashboard is visible
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
