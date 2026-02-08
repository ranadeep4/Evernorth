import {test,expect} from '@playwright/test';

// search bus test
test('search bus', async ({page}) => {
    // Go to tsrtc site
    await page.goto('https://www.tgsrtcbus.in/');
    await page.click('a#close')
    await page.click('input#rc_select_0');
    await page.fill('input#rc_select_0', 'shirdi');
    await page.getByText('SHIRDI').click();
    await page.waitForTimeout(10000);
});

// attributes given by developers for the elements
// id, class, name, placeholder, role, text
// CSS selectors
// XPath
// data-testid
// data-test

// html 5 attributes
// aria-label
// aria-labelledby
// aria-describedby
// data-role
// data-name
// data-value
// etc

// playwright recommended built-in locators
// getByRole : The Accessible Role of an element. We can observe the role in the dev tools accessibility tab
// getByLabel : The label associated with an input element <label for="inputID">Label Text</label>
// getByPlaceholder : The placeholder text of an input element <input placeholder="Enter Name"/>
// getByText : The text content of an element <div>Some text here</div>
// getByTestId : The test id attribute of an element <div data-testid="uniqueID"></div>
// getByAltText : The alt text of an image <img alt="description"/>
// getByTitle : The title attribute of an element <div title="tooltip text"></div>

// Examples:
// getByRole: page.getByRole('button', { name: 'Submit' }).click();
// getByLabel: page.getByLabel('Username').fill('myUsername');
// getByPlaceholder: page.getByPlaceholder('Enter your email').fill('test');com
// getByText: page.getByText('Welcome to the site').click();
// getByTestId: page.getByTestId('submit-button').click();
// getByAltText: page.getByAltText('Company Logo').click();
// getByTitle: page.getByTitle('More information').click();

// all above are user visible attributes
// now coming to developer visible attributes
// id, class, name, role    

// CSS selectors
// XPath

