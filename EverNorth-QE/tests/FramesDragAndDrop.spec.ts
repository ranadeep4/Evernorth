// Automate APSRTC Search bus and get number of AC busses between Hyderabad and Vijayawada
import { test, expect } from '@playwright/test';
test('search bus and get number of AC busses', async ({ page }) => {
    // Go to APSRTC site
    await page.goto('https://jqueryui.com/droppable/');

    // Handle frame
    const frame = page.frameLocator('iframe.demo-frame');
    await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
    
    await page.waitForTimeout(10000);

});