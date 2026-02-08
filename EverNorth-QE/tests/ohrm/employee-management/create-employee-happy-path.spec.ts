// spec: specs/orangehrm-employee-management.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Employee Management Tests', () => {
  test('Create Employee - Happy Path', async ({ page }) => {
    // Login with valid credentials
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for dashboard to load
    await expect(page).toHaveURL(/.*dashboard/);

    // Navigate to PIM module
    await page.getByRole('link', { name: 'PIM' }).click();

    // Click 'Add Employee' link in navigation
    await page.getByRole('link', { name: 'Add Employee' }).click();

    // Add Employee form loads with all required fields
    await expect(page.getByRole('textbox', { name: 'First name' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Middle name' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();

    // Enter 'John' in First Name field
    await page.getByRole('textbox', { name: 'First name' }).fill('John');

    // Enter 'Michael' in Middle Name field
    await page.getByRole('textbox', { name: 'Middle name' }).fill('Michael');

    // Enter 'Doe' in Last Name field
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Doe');

    // Verify Employee ID is auto-generated and displayed
    const employeeIdField = page.getByRole('textbox').nth(4);
    await expect(employeeIdField).toHaveValue(/^\d+$/);

    // Click Save button
    await page.getByRole('button', { name: 'Save' }).click();

    // Wait for employee details page to load
    await expect(page).toHaveURL(/.*pim\/viewPersonalDetails/);

    // Employee is successfully created
    // User is redirected to Personal Details page
    // Employee name 'John Doe' appears in page header
    await expect(page.getByRole('heading', { name: 'John Doe' })).toBeVisible();

    // Multiple tabs are available (Personal Details, Contact Details, etc.)
    await expect(page.getByRole('tab', { name: 'Personal Details' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Contact Details' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Emergency Contacts' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Job' })).toBeVisible();
  });
});