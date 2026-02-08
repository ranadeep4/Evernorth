import { expect, type Locator, type Page } from '@playwright/test';

// Dashboard Page class
export class DashboardPage {
    page: Page;
    #pim: Locator;

    constructor(page: Page) {
        this.page = page;
        //locators of login page
        this.#pim = this.page.getByRole('link', { name: 'PIM' });
    }
    async clickPIM() {
        await this.#pim.click();
        console.log('Clicked on PIM module');
    }
    async verifyDashboard() {
        await expect(this.page.getByRole('heading', { name: 'PIM' })).toBeVisible();
        console.log('Dashboard verified successfully');
    }
}