// Create test by accessing POM classes
import { BaseTest as test} from '../src/basetest.js';


test.describe('OrangeHRM POM Tests', () => {


    test('Add Employee using POM', async ({ page, loginPage, dashboardPage, employeeListPage, addEmployeePage }) => {
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