import { expect, type Locator, type Page } from '@playwright/test';

// Employee List Page class
export class EmployeeListPage {
    page: Page;

    #addButton: Locator;

    constructor(page: Page) {
        this.page = page;
        //locators of employee list page
        this.#addButton = this.page.getByRole('button', { name: 'Add Employee' });
    }
    async clickAddEmployee() {
        await this.#addButton.click();
        console.log('Clicked on Add Employee button');
    }
}
