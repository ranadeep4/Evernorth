// Create test by accessing POM classes
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginpage';
import { DashboardPage } from '../src/pages/dashboardpage';
import { EmployeeListPage } from '../src/pages/employeeListPage';
import { AddEmployeePage } from '../src/pages/addEmployeePage';

test.describe('OrangeHRM POM Tests', () => {

    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let employeeListPage: EmployeeListPage;
    let addEmployeePage: AddEmployeePage;
    
    test.beforeEach(async ({ page }) => {
        // Initialize page objects
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        employeeListPage = new EmployeeListPage(page);
        addEmployeePage = new AddEmployeePage(page);
    });

    test('Add Employee using POM', async ({ page }) => {
        // Use login page object to perform login
        await loginPage.navigate();
        await loginPage.enterUserName('Admin');
        await loginPage.enterPassword('admin123');
        await loginPage.clickLogin();
        await loginPage.verifyLogin();
        // Use dashboard page object to interact with dashboard
        await dashboardPage.clickPIM();
        await dashboardPage.verifyDashboard();

        // Use employee list page object to interact with employee list
        await employeeListPage.clickAddEmployee();

        // Use add employee page object to add a new employee
        await addEmployeePage.enterFirstName('John');
        await addEmployeePage.enterLastName('Doe');
        await addEmployeePage.clickSave();
        await addEmployeePage.verifyEmployeeAdded();
    });
}); 