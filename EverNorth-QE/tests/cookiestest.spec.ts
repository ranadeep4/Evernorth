import { test, expect } from '@playwright/test';

test.setTimeout(100000); // 100 seconds
test('cookies authentication', async ({ browser}) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    // get cookies from the page
    const cookies = await page.context().cookies();
    console.log(cookies);   // print the cookies in the console
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 10000 });
    await page.waitForTimeout(5000);
    // close the page
    await page.close();
    console.log('Page closed');
    //wait for 5 seconds
    await context.close();

    let anotherContext = await browser.newContext();
    let anotherPage = await anotherContext.newPage();
    // await anotherContext.addCookies(cookies);
    // use the cookies to authenticate the page
    await anotherPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(anotherPage.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await anotherPage.waitForTimeout(10000);
  });