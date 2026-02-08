// Xpath is built for XML documents
// HTML is a type of XML document
// XPath is used to locate elements in XML/HTML documents
// XPath syntax
// 1. Absolute XPath: starts from root node and follows the hierarchy
//     /html/body/div/form/input
// 2. Relative XPath: starts from anywhere in the document
//     //input[@attribue='value']
// the version of XPath used in Playwright is XPath 1.0 though XPath 2.0 and 3.0 are available
// XPath uses path expressions to navigate through elements and attributes in an XML document
// Path expressions use a variety of syntax notations to select nodes or node-sets in the document tree

// XPath functions
// 1. text() : selects the text content of an element
//     //tagname[text()='textvalue']
// example for text(): //button[text()='Submit']
// normalize-space() can be used to trim leading and trailing spaces in text()
// example for normalize-space(): //div[normalize-space(text())='Welcome']
// . also can be used to represent text() in xpath
// example for . : //button[.='Submit']

// 2. contains() : selects elements that contain a specific text or attribute value
//     //tagname[contains(text(),'partialtext')]
//     //tagname[contains(@attribute,'partialvalue')]
// example for contains(): //div[contains(text(),'Welcome')]
// example for contains() with attribute: //input[contains(@type,'pass')]

// 3. starts-with() : selects elements whose attribute value starts with a specific text
//     //tagname[starts-with(@attribute,'startingtext')]
// example for starts-with(): //input[starts-with(@id,'user')]

// 4. position() : selects elements based on their position in the document
//     (//tagname)[position()=index]
// example for position(): (//input[@type='text'])[2]  // selects the 2nd text input element

// 5. last() : selects the last element in a set of elements
//     (//tagname)[last()]  // () used to group the elements
// example for last(): (//div[@class='item'])[last()]  // selects the last div with class 'item'

// 6. pipe (|) : used to combine multiple XPath expressions
//     //tagname1 | //tagname2
// Examples:
// //input[@type='text'] | //input[@type='password']

// In Playwright we can use XPath as below:
// await page.locator("//input[@type='text']").fill('Admin');
// await page.locator("//button[text()='Submit']").click();
// if we start the locator with // it will be treated as XPath

// Combining multiple functions in XPath
// Example: select the 2nd input element whose id starts with 'user' and type is 'text'
// (//input[starts-with(@id,'user') and @type='text'])[2]

// using or in xpath
// Example: select input element whose id is 'username' or 'user-id'
// //input[@id='username' or @id='user-id']
// Example: select button element whose text is 'Submit' or 'Login'
// //button[text()='Submit' or text()='Login']

// 7. and in xpath
// Example: select input element whose id starts with 'user' and type is 'text'
// //input[starts-with(@id,'user') and @type='text']

// 8. use . in xpath to represent current node
// 9. use .. in xpath to represent parent node
// Example: select parent div of input element whose id is 'username'
// //input[@id='username']/..

// Xpath Axes
// Axes are used to define the relationship between nodes
// Commonly used axes:
// 1. child: selects all child nodes of the current node
//     //parenttag/child::childtag
// 2. parent: selects the parent node of the current node
//     //childtag/parent::parenttag
// 3. ancestor: selects all ancestor nodes of the current node
//     //childtag/ancestor::ancestortag
// 4. descendant: selects all descendant nodes of the current node
//     //parenttag/descendant::descendanttag
// 5. following-sibling: selects all sibling nodes that follow the current node
//     //tagname/following-sibling::siblingtag
// 6. preceding-sibling: selects all sibling nodes that precede the current node
//     //tagname/preceding-sibling::siblingtag
// Example for child axis: //div[@id='form']/child::input
// Example for parent axis: //input[@id='username']/parent::div
// Example for ancestor axis: //input[@id='username']/ancestor::form
// Example for descendant axis: //form[@id='loginForm']/descendant::input
// Example for following-sibling axis: //label[@for='username']/following-sibling::input
// Example for preceding-sibling axis: //input[@id='username']/preceding-sibling::label
// Note: In Playwright we can use XPath axes as is in the locator
// await page.locator("//input[@id='username']/parent::div").click();

// Combining XPath axes with functions
// Example: select the input element which is a child of div with id 'form' and type is 'text'
// //div[@id='form']/child::input[@type='text']
// Example: select the last input element which is a descendant of form with id 'loginForm'
// //form[@id='loginForm']/descendant::input[last()]
// Example: select the following-sibling input element of label with for 'username' and type is 'text'
// //label[@for='username']/following-sibling::input[@type='text']
// Example: select the preceding-sibling label element of input with id 'username' and text is 'Username'
// //input[@id='username']/preceding-sibling::label[text()='Username']
// Example: select the parent div of input element whose id starts with 'user' and type is 'text'
// //input[starts-with(@id,'user') and @type='text']/parent::div

// XPath Axes syntax shortcuts
// 1. child:: can be replaced with /
//     //parenttag/child::childtag  => //parenttag/childtag
// 2. parent:: can be replaced with /..
//     //childtag/parent::parenttag  => //childtag/..
// 3. ancestor:: cannot be replaced with shortcut
//     //childtag/ancestor::ancestortag
// 4. descendant:: can be replaced with //
//     //parenttag/descendant::descendanttag  => //parenttag//descendanttag
// 5. following-sibling:: cannot be replaced with shortcut
//     //tagname/following-sibling::siblingtag
// 6. preceding-sibling:: cannot be replaced with shortcut
//     //tagname/preceding-sibling::siblingtag
// 7. following:: cannot be replaced with shortcut
//     //tagname/following::followingtag
// 8. preceding:: cannot be replaced with shortcut
//     //tagname/preceding::precedingtag

// Examples using shortcuts
// Example for child axis: //div[@id='form']/input
// Example for parent axis: //input[@id='username']/..
// Example for descendant axis: //form[@id='loginForm']//input

// Xpath of parent or child or sibling elements/axes::xpath of target element without using //

// Advanced Examples:
// 1. Select the parent element that has a specific child element using current node (.)
// Example: select the div which is parent of input element with id 'username'
// //div[@class='row' and .//div[normalize-space()='35197']]
// here . represents the current node which is div with class 'row'
