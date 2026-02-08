# OrangeHRM Employee Management Test Plan

## Application Overview

Comprehensive test plan for OrangeHRM Employee Management System covering user authentication, employee creation, and session management. This plan includes happy path scenarios, edge cases, validation testing, and error handling for the core HR management workflows.

## Test Scenarios

### 1. Authentication Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Valid Login Flow

**File:** `tests/authentication/valid-login.spec.ts`

**Steps:**
  1. Navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2. Verify login page elements are visible (username field, password field, Login button)
  3. Enter 'Admin' in username field
  4. Enter 'admin123' in password field
  5. Click Login button
  6. Wait for dashboard to load

**Expected Results:**
  - Login page loads successfully with all required elements
  - Username and password fields accept input
  - User is successfully authenticated and redirected to dashboard
  - Dashboard displays with PIM, Admin, Leave, Time modules visible
  - User profile shows logged in user name in top right

#### 1.2. Invalid Credentials Login

**File:** `tests/authentication/invalid-login.spec.ts`

**Steps:**
  1. Navigate to login page
  2. Enter 'InvalidUser' in username field
  3. Enter 'WrongPassword' in password field
  4. Click Login button
  5. Verify error message appears

**Expected Results:**
  - Error message is displayed
  - User remains on login page
  - Username and password fields are cleared or highlighted
  - Login button remains clickable for retry

#### 1.3. Empty Fields Login Validation

**File:** `tests/authentication/empty-fields-login.spec.ts`

**Steps:**
  1. Navigate to login page
  2. Leave username field empty
  3. Leave password field empty
  4. Click Login button
  5. Verify validation messages

**Expected Results:**
  - Required field validation messages appear
  - Form does not submit
  - User remains on login page
  - Fields are highlighted to indicate required

### 2. Employee Management Tests

**Seed:** `tests/seed.spec.ts`

#### 2.1. Create Employee - Happy Path

**File:** `tests/employee-management/create-employee-happy-path.spec.ts`

**Steps:**
  1. Login with valid credentials
  2. Navigate to PIM module
  3. Click 'Add Employee' link in navigation
  4. Enter 'John' in First Name field
  5. Enter 'Michael' in Middle Name field
  6. Enter 'Doe' in Last Name field
  7. Verify Employee ID is auto-generated
  8. Click Save button
  9. Wait for employee details page to load

**Expected Results:**
  - Add Employee form loads with all required fields
  - First Name, Middle Name, Last Name accept text input
  - Employee ID is automatically generated and displayed
  - Employee is successfully created
  - User is redirected to Personal Details page
  - Employee name 'John Doe' appears in page header
  - Multiple tabs are available (Personal Details, Contact Details, etc.)

#### 2.2. Create Employee via Add Button

**File:** `tests/employee-management/create-employee-add-button.spec.ts`

**Steps:**
  1. Login with valid credentials
  2. Navigate to PIM module
  3. Click 'Add' button in Employee List page
  4. Fill out employee form with required fields
  5. Click Save button

**Expected Results:**
  - Add Employee form loads correctly
  - Employee creation process completes successfully
  - Alternative navigation path works as expected

#### 2.3. Create Employee - Required Field Validation

**File:** `tests/employee-management/create-employee-validation.spec.ts`

**Steps:**
  1. Navigate to Add Employee form
  2. Leave First Name field empty
  3. Leave Last Name field empty
  4. Click Save button
  5. Verify validation messages
  6. Enter only First Name
  7. Click Save button
  8. Verify Last Name validation

**Expected Results:**
  - Required field validation messages appear
  - Form does not submit without required fields
  - Specific validation for First Name appears
  - Specific validation for Last Name appears
  - Fields are highlighted to indicate missing required data

#### 2.4. Create Employee with Profile Picture

**File:** `tests/employee-management/create-employee-with-picture.spec.ts`

**Steps:**
  1. Navigate to Add Employee form
  2. Click 'Choose File' button for profile picture
  3. Select a valid image file (jpg, png, gif under 1MB)
  4. Fill out required employee fields
  5. Click Save button
  6. Verify profile picture appears in employee details

**Expected Results:**
  - File upload dialog opens
  - Valid image file is accepted
  - Profile picture preview appears
  - Employee is created with profile picture
  - Profile picture displays in employee details page

#### 2.5. Create Employee with Login Details

**File:** `tests/employee-management/create-employee-with-login.spec.ts`

**Steps:**
  1. Navigate to Add Employee form
  2. Fill out required employee fields
  3. Check 'Create Login Details' checkbox
  4. Verify additional login fields appear
  5. Fill out login credentials
  6. Click Save button

**Expected Results:**
  - Create Login Details checkbox is functional
  - Additional login fields appear when checked
  - Employee is created with login credentials
  - Login details are properly configured

#### 2.6. Employee Details Navigation

**File:** `tests/employee-management/employee-details-navigation.spec.ts`

**Steps:**
  1. Create or navigate to existing employee details
  2. Click on 'Contact Details' tab
  3. Click on 'Emergency Contacts' tab
  4. Click on 'Job' tab
  5. Click on 'Salary' tab
  6. Return to 'Personal Details' tab

**Expected Results:**
  - Each tab loads correctly
  - Tab content is appropriate for section
  - Tab navigation works smoothly
  - Data persists between tab switches
  - All employee management sections are accessible

### 3. Session Management Tests

**Seed:** `tests/seed.spec.ts`

#### 3.1. Successful Logout Flow

**File:** `tests/session-management/successful-logout.spec.ts`

**Steps:**
  1. Login with valid credentials
  2. Navigate to any internal page
  3. Click on user profile in top right corner
  4. Verify dropdown menu appears with logout option
  5. Click 'Logout' option
  6. Wait for redirect to login page

**Expected Results:**
  - User profile dropdown displays correctly
  - Logout option is visible and clickable
  - User session is terminated
  - User is redirected to login page
  - Attempting to navigate to internal pages redirects to login
  - Session cookies/tokens are cleared

#### 3.2. User Profile Menu Options

**File:** `tests/session-management/profile-menu-options.spec.ts`

**Steps:**
  1. Login with valid credentials
  2. Click on user profile dropdown
  3. Verify 'About' option is present
  4. Verify 'Support' option is present
  5. Verify 'Change Password' option is present
  6. Verify 'Logout' option is present

**Expected Results:**
  - All expected menu options are visible
  - Menu options are clickable
  - Profile dropdown functions correctly
  - User has access to account management features

#### 3.3. Session Timeout Handling

**File:** `tests/session-management/session-timeout.spec.ts`

**Steps:**
  1. Login with valid credentials
  2. Wait for extended period to simulate timeout
  3. Attempt to perform an action
  4. Verify session timeout behavior

**Expected Results:**
  - Session expires after appropriate timeout period
  - User is redirected to login page
  - Appropriate timeout message is displayed
  - User can re-authenticate after timeout

### 4. Navigation and UI Tests

**Seed:** `tests/seed.spec.ts`

#### 4.1. Main Navigation Verification

**File:** `tests/navigation/main-navigation.spec.ts`

**Steps:**
  1. Login with valid credentials
  2. Verify all main navigation modules are visible
  3. Click on Admin module
  4. Click on PIM module
  5. Click on Leave module
  6. Click on Time module
  7. Click on Dashboard module

**Expected Results:**
  - All navigation modules load correctly
  - Each module displays appropriate content
  - Navigation between modules works smoothly
  - Current module is highlighted in navigation
  - Module pages load within expected time

#### 4.2. PIM Module Navigation

**File:** `tests/navigation/pim-navigation.spec.ts`

**Steps:**
  1. Navigate to PIM module
  2. Verify 'Employee List' link is present
  3. Verify 'Add Employee' link is present
  4. Verify 'Reports' link is present
  5. Click each navigation option to verify functionality

**Expected Results:**
  - PIM sub-navigation is complete and functional
  - Employee List displays existing employees
  - Add Employee form loads correctly
  - Reports section is accessible
  - Navigation breadcrumbs are accurate

#### 4.3. Responsive Design Verification

**File:** `tests/navigation/responsive-design.spec.ts`

**Steps:**
  1. Test application at different screen sizes
  2. Verify navigation menu behavior on mobile
  3. Test form layouts at different resolutions
  4. Verify button and field accessibility

**Expected Results:**
  - Application displays correctly at various screen sizes
  - Navigation adapts appropriately for mobile devices
  - Forms remain functional and readable
  - All interactive elements remain accessible
