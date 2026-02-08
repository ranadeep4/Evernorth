import { chromium, firefox, webkit } from 'playwright';
(async () => {
    const browser = await chromium.launch({ headless: false });  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Enter username
    await page.getByPlaceholder('Username').fill('Admin');
    // Enter password
    await page.getByPlaceholder('Password').fill('admin123');
    // Click login button
    await page.getByRole('button', { name: 'Login' }).click();

    await browser.close();
})();