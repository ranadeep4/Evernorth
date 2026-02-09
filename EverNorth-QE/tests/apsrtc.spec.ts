// Automate APSRTC Search bus and get number of AC busses between Hyderabad and Vijayawada
import { test, expect } from '@playwright/test';
test('search bus and get number of AC busses', async ({ page }) => {
    // Go to APSRTC site
    await page.goto('https://www.apsrtconline.in/oprs-web/');

    // Enter From Place
    await page.click('input#fromPlaceName'); //input[@id='fromPlaceName']
    await page.fill('input#fromPlaceName', 'Hyderabad');
    await page.getByText('HYDERABAD', { exact: true }).click(); //*[text()='HYDERABAD']

    // Enter To Place
    
    await page.click('input#toPlaceName'); //input[@id='toPlaceName']
    await page.fill('input#toPlaceName', 'Vijayawada');
    await page.getByText('VIJAYAWADA', { exact: true }).click();
    // Select Journey Date as January 31st of current year
    await page.click('input#txtJourneyDate');
    await page.getByText('31',{exact: true}).first().click();
    // Click Search Buses button
    await page.click('input#searchBtn');
    
    // Wait for search results to load
    await page.waitForSelector('div:has-text("Book ticket in advance")');
    // Filter for AC buses
    await page.click('#BtFid');
    await page.check('input#Bustypes200');

    // get all bus elements in a list
    const busList = await page.locator('div.srvceNO:visible').all();
    
    // print number of AC busses
    console.log('Number of AC buses available: ' + busList.length);

    busList.forEach(async (bus) => {
        console.log('Bus element:', bus);
        const busName = await bus.textContent();
        console.log('Bus Name: ' + busName?.trim());
    });

    // // print all bus names
    // for (const bus of busList) {
    //     const busName = await bus.textContent();
    //     console.log('Bus Name: ' + busName?.trim());
    // }

    //book ticket for a specific bus using service number
    let serviceNumber = 35197;
    // const child = page.getByText('35197', { exact: true });
    // const parent = page.locator('div.row').filter({ has: child });
    // await parent.getByRole('button', { name: 'Select Seats' }).click();

    // CSS way to locate the same
    await page.locator(`div.row:has-text("${serviceNumber}")`)
    .getByRole('button', { name: 'Select Seats' }).click();

    await page.locator("//div[normalize-space()='35197']/../..//input[@value='Select Seats']").click();
    //div[normalize-space()='35197']/following::input[@value="Select Seats"][1]

    await page.waitForTimeout(10000);
});

