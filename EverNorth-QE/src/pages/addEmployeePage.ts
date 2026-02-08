//Add Employee Page class
// import necessary modules from Playwright
import { expect, type Locator, type Page } from '@playwright/test';
export class AddEmployeePage {
    page: Page;

    #firstName: Locator
    #lastName: Locator
    #saveButton: Locator
    constructor(page: Page) {
        this.page = page;
        //locators of add employee page
        this.#firstName = this.page.getByLabel('First Name');
        this.#lastName = this.page.getByLabel('Last Name');
        this.#saveButton = this.page.getByRole('button', { name: 'Save' });
    }
    async enterFirstName(firstName: string) {
        await this.#firstName.fill(firstName);
        console.log(`Entered first name: ${firstName}`);
    }
    async enterLastName(lastName: string) {
        await this.#lastName.fill(lastName);
        console.log(`Entered last name: ${lastName}`);
    }
    async clickSave() {
        await this.#saveButton.click();
        console.log('Clicked on Save button');
    }
    async verifyEmployeeAdded() {
        await expect(this.page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
        console.log('Employee added verified successfully');
    }
}
