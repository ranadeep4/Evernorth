// Automate APSRTC Search bus and get number of AC busses between Hyderabad and Vijayawada
import { test, expect } from '@playwright/test';
test('search bus and get number of AC busses', async ({ page }) => {
    // Go to APSRTC site
    await page.goto('https://www.apsrtconline.in/oprs-web/');

    // alert handling
    page.once('dialog', async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      expect(dialog.message()).toContain('Please select start place.');
      await dialog.accept();
    });

    await page.waitForTimeout(5000);

    //click on search button to see the alert
    await page.click('input#searchBtn');
  
    await page.waitForTimeout(5000);


    // Enter From Place
    await page.click('input#fromPlaceName'); //input[@id='fromPlaceName']
    await page.fill('input#fromPlaceName', 'Hyderabad');
    await page.getByText('HYDERABAD', { exact: true }).click(); //*[text()='HYDERABAD']
    await page.waitForTimeout(5000);
    page.once('dialog', async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      expect(dialog.message()).toContain('Please select end place.');
      await dialog.accept();
    });

      //click on search button to see the alert
    await page.click('input#searchBtn');
    await page.waitForTimeout(5000);

    // Enter To Place
    await page.click('input#toPlaceName'); //input[@id='toPlaceName']
    await page.fill('input#toPlaceName', 'Vijayawada');
    await page.getByText('VIJAYAWADA', { exact: true }).click();
    // Select Journey Date as January 31st of current year
    await page.click('input#txtJourneyDate');
    await page.getByText('31',{exact: true}).first().click();
    // Click Search Buses button
    await page.click('input#searchBtn');
    
    // // Wait for search results to load
    await page.waitForSelector('div:has-text("Book ticket in advance")');
    
    // await page.waitForTimeout(10000);
});

