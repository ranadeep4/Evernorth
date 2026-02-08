// CSS Selectors for Test Automation

// CSS is for styles. CSS selectors are for locating elements
// XML is for data representation
//  If developer want to style an element we should first identify it using CSS selectors
// In Html under stye tag we write CSS to style the elements
// In Html we use CSS selectors to locate elements for applying styles
// In automation testing we use CSS selectors to locate elements for performing actions

// CSS selectors syntax
// element tag : input, div, a, span, button
// #id : input#username
// .class : input.form-control
// [attribute='value'] : input[type='text']
// element tag + #id + .class + [attribute='value'] : input#username.form-control[type='text']
// space: represents hierarchy
//  element1 element2 : parent child : div form input

// >: represents direct child
// +: represents sibling. This works only for immediate next sibling
// ~: represents sibling. This works for all next siblings

// Examples:
//  element1 element2 : parent child : div form input
//  element1 > element2 : direct child : div > form > input
//  element1 + element2 : immediate next sibling : label + input
//  element1 ~ element2 : all next siblings : label ~ input
//  input#username.form-control[type='text']

// Combining multiple selectors
// div#loginForm.form-container[class='container'] input#username.form-control[type='text']
// div#loginForm.form-container[class='container'] > input#username.form-control[type='text']
// div#loginForm.form-container[class='container'] > label[for='username'] + input#username.form-control[type='text']   
// div#loginForm.form-container[class='container'] > label[for='username'] ~ input#username.form-control[type='text']

// Note: CSS selectors are case sensitive
// In Playwright we can use CSS selectors as below:
// await page.click("input#username.form-control[type='text']");
// await page.fill("input#username.form-control[type='text']", "Admin");
// await page.click("div#loginForm.form-container[class='container'] > label[for='username'] + input#username.form-control[type='text']");

// In playwright use CSS selectors as is or you can use with custom classes added by playwright
// Playwright adds custom pseudo-classes like :visible, :has-text(), :has(), :is(), :nth-match() and more.
// Examples:
// await page.locator('article:has-text("Playwright")').click();

// await page.locator('#nav-bar :text("Home")').click();

// matching only visible elements
// await page.locator('button:visible').click();

// CSS: matching elements based on layout

// await page.locator('input:right-of(:text("Username"))').fill('value');

