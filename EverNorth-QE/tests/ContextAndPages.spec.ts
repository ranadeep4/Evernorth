// Automate APSRTC Search bus and get number of AC busses between Hyderabad and Vijayawada
import { test, expect } from '@playwright/test';
test('search bus and get number of AC busses', async ({ page }) => {
    // Go to APSRTC site
    await page.goto('https://www.tgsrtc.telangana.gov.in/reservation-booking-service-home');

    // click on book now
    await page.click('text=Book Now');

    // wait for new tab to open

    await page.context().waitForEvent('page');
    const pages = page.context().pages();
    const newPage = pages[pages.length - 1];
    await newPage.waitForLoadState();

    console.log('New page URL:', await newPage.title());

    await newPage.click('a#close')
    await newPage.click('input#rc_select_0');
    await newPage.fill('input#rc_select_0', 'shirdi');
    await newPage.getByText('SHIRDI').click();
    await newPage.waitForTimeout(10000);

});

