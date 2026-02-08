import { test, expect } from '@playwright/test';

test('OrangeHRM - Login, Create Employee, and Logout', async ({ page }) => {
    // Step 1: Navigate to OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Step 2: Login to OrangeHRM
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Verify login successful - Dashboard heading visible
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    
    // Step 3: Navigate to PIM (Personnel Information Management)
    await page.getByRole('link', { name: 'PIM' }).click();
    
    // Verify PIM page loaded
    await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();
    
    // Step 4: Click Add button to create new employee
    await page.getByRole('button', { name: ' Add' }).click();
    
    // Verify Add Employee page loaded
    await expect(page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();
    
    // Step 5: Fill employee details
    await page.getByRole('textbox', { name: 'First Name' }).fill('John');
    await page.getByRole('textbox', { name: 'Middle Name' }).fill('Michael');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');
    
    // Employee ID is auto-generated, so we can leave it as is
    
    // Step 6: Save the employee
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Wait for success message and employee details page to load
    await page.waitForURL(/.*\/pim\/viewPersonalDetails\/empNumber\/\d+/);
    
    // Verify employee was created successfully
    await expect(page.getByRole('heading', { name: 'John Doe' })).toBeVisible();
    
    // Step 7: Logout
    // Click on user dropdown menu
    await page.locator('span').filter({ hasText: 'manda user' }).click();
    
    // Click on Logout menuitem
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    
    // Verify logout successful - back to login page
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
