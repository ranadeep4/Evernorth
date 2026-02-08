import { chromium } from '@playwright/test';

async function exploreOrangeHRM() {
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('\n=== EXPLORING ORANGE HRM ===\n');

    try {
        // Step 1: Navigate to login page
        console.log('Step 1: Navigating to Orange HRM login page...');
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.waitForLoadState('networkidle');

        console.log('\n--- LOGIN PAGE LOCATORS ---');
        console.log('URL:', page.url());
        
        // Explore login page elements
        const usernameInput = page.getByPlaceholder('Username');
        const passwordInput = page.getByPlaceholder('Password');
        const loginButton = page.getByRole('button', { name: 'Login' });
        
        console.log('✓ Username input: page.getByPlaceholder("Username")');
        console.log('✓ Password input: page.getByPlaceholder("Password")');
        console.log('✓ Login button: page.getByRole("button", { name: "Login" })');

        // Step 2: Login
        console.log('\nStep 2: Logging in...');
        await usernameInput.fill('Admin');
        await passwordInput.fill('admin123');
        await loginButton.click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);

        console.log('\n--- DASHBOARD LOCATORS ---');
        console.log('URL:', page.url());
        const dashboard = page.getByRole('heading', { name: 'Dashboard' });
        console.log('✓ Dashboard heading: page.getByRole("heading", { name: "Dashboard" })');

        // Step 3: Navigate to PIM (Employee Management)
        console.log('\nStep 3: Navigating to PIM module...');
        const pimMenu = page.getByRole('link', { name: 'PIM' });
        console.log('✓ PIM menu link: page.getByRole("link", { name: "PIM" })');
        await pimMenu.click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);

        console.log('\n--- PIM PAGE LOCATORS ---');
        console.log('URL:', page.url());

        // Step 4: Click Add Employee
        console.log('\nStep 4: Navigating to Add Employee...');
        const addButton = page.getByRole('button', { name: 'Add' });
        console.log('✓ Add button: page.getByRole("button", { name: "Add" })');
        await addButton.click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);

        console.log('\n--- ADD EMPLOYEE PAGE LOCATORS ---');
        console.log('URL:', page.url());

        // Explore Add Employee form
        const firstNameInput = page.getByPlaceholder('First Name');
        const middleNameInput = page.getByPlaceholder('Middle Name');
        const lastNameInput = page.getByPlaceholder('Last Name');
        
        console.log('✓ First Name: page.getByPlaceholder("First Name")');
        console.log('✓ Middle Name: page.getByPlaceholder("Middle Name")');
        console.log('✓ Last Name: page.getByPlaceholder("Last Name")');

        // Check for employee ID field
        const employeeIdLabel = page.locator('label:has-text("Employee Id")');
        const employeeIdInput = employeeIdLabel.locator('..').locator('input').nth(1);
        console.log('✓ Employee ID: Complex selector (auto-generated)');

        // Look for Create Login Details toggle
        const createLoginToggle = page.locator('input[type="checkbox"]').first();
        console.log('✓ Create Login Details toggle: page.locator(\'input[type="checkbox"]\').first()');

        // Save button
        const saveButton = page.getByRole('button', { name: 'Save' });
        console.log('✓ Save button: page.getByRole("button", { name: "Save" })');

        // Step 5: Fill employee details
        console.log('\nStep 5: Filling employee details...');
        await firstNameInput.fill('John');
        await middleNameInput.fill('M');
        await lastNameInput.fill('Doe');
        
        // Get the auto-generated employee ID
        const empIdInput = page.locator('label:has-text("Employee Id")').locator('..').locator('..').locator('input').nth(1);
        const employeeId = await empIdInput.inputValue();
        console.log('Generated Employee ID:', employeeId);

        await saveButton.click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);

        console.log('\n--- EMPLOYEE SAVED ---');
        console.log('URL:', page.url());
        
        // Check for success message
        const successMessage = page.locator('.oxd-toast-content');
        if (await successMessage.isVisible()) {
            const message = await successMessage.textContent();
            console.log('✓ Success message:', message);
            console.log('✓ Success toast: page.locator(".oxd-toast-content")');
        }

        // Step 6: Logout
        console.log('\nStep 6: Logging out...');
        const userDropdown = page.locator('.oxd-userdropdown-tab');
        console.log('✓ User dropdown: page.locator(".oxd-userdropdown-tab")');
        await userDropdown.click();
        await page.waitForTimeout(1000);

        const logoutLink = page.getByRole('menuitem', { name: 'Logout' });
        console.log('✓ Logout link: page.getByRole("menuitem", { name: "Logout" })');
        await logoutLink.click();
        await page.waitForLoadState('networkidle');

        console.log('\n--- LOGGED OUT ---');
        console.log('URL:', page.url());
        console.log('✓ Back to login page');

        console.log('\n=== EXPLORATION COMPLETE ===\n');

    } catch (error) {
        console.error('Error during exploration:', error);
    } finally {
        await page.waitForTimeout(2000);
        await browser.close();
    }
}

exploreOrangeHRM();
