import { test as base } from '@playwright/test';
// Create test by accessing POM classes
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginpage';
import { DashboardPage } from '../src/pages/dashboardpage';
import { EmployeeListPage } from '../src/pages/employeeListPage';
import { AddEmployeePage } from '../src/pages/addEmployeePage';

export const BaseTest = base.extend<{
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    employeeListPage: EmployeeListPage;
    addEmployeePage: AddEmployeePage;
}>({
    loginPage: async ({ page }, use) => {   
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    employeeListPage: async ({ page }, use) => {
        await use(new EmployeeListPage(page));
    },
    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployeePage(page));
    },
});
