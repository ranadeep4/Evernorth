//Node JS Project file and folder structure explanation
// 1. package.json: This file contains metadata about the project, including the project name, version, dependencies, scripts, and other configurations.
// 2. node_modules/: This folder contains all the installed dependencies for the project.
// 3. src/: This folder typically contains the source code for the application.
// 4. tests/: This folder is commonly used to store test files for the application.
// 5. .gitignore: This file specifies which files and folders should be ignored by Git version control.
// 6. README.md: This file provides documentation and information about the project.

// package.json file explanation
// 1. name: The name of the project.
// 2. version: The version of the project.
// 3. description: A brief description of the project.
// 4. main: The entry point of the application.
// 5. scripts: A set of commands that can be run using npm.
// 6. dependencies: A list of packages that the project depends on.
// 7. devDependencies: A list of packages that are only needed for development and testing.
// 8. author: The author of the project.
// 9. license: The license under which the project is released.
// 10. type: Specifies the module system used in the project (e.g., "module" for ES modules, "commonjs" for CommonJS).
// To create a package.json file, we can use the command npm init or npm init -y to create a default package.json file.

// Dependencies vs DevDependencies
// 1. Dependencies: These are the packages that are required for the application to run in production. They are listed under the "dependencies" section in package.json. Example: express, lodash.
// 2. DevDependencies: These are the packages that are only needed for development and testing purposes. They are listed under the "devDependencies" section in package.json. Example: typescript, jest, eslint.
// To install a package as a dependency, we use the command npm install <package-name> --save or npm install <package-name>.
// To install a package as a devDependency, we use the command npm install <package-name> --save-dev.

// To run a script defined in the package.json file, we use the command npm run <script-name>.

// Playwright Project Structure
// 1. tests/: This folder contains all the test files for the application.
// 2. playwright.config.ts: This file contains the configuration settings for Playwright tests, such as browser settings, test directory, timeout settings, etc.
// 3. fixtures/: This folder is used to store custom fixtures that can be used across multiple test files.
// 4. reports/: This folder is used to store test reports generated after running the tests.
// 5. utils/: This folder is used to store utility functions that can be used across multiple test files.
// 6. .env: This file is used to store environment variables for the application, such as API keys, database connection strings, etc.
// 7. .gitignore: This file specifies which files and folders should be ignored by Git version control, such as node_modules/, reports/, etc.
// 8. package.json: This file contains metadata about the project, including the project name, version, dependencies, scripts, and other configurations.
// 9. tsconfig.json: This file contains the TypeScript compiler options and settings for the project.
// 10. README.md: This file provides documentation and information about the project.
// To run Playwright tests, we can use the command npx playwright test or npm test if a test script is defined in package.json.

// To generate Playwright test reports, we can use the command npx playwright show-report after running the tests.
// To install Playwright, we use the command npm install -D @playwright/test
// To install browsers for Playwright, we use the command npx playwright install

//Tests folder
// This folder contains all the test files for the application.
// Test files are typically named with a .spec.ts or .test.ts extension.
// Example test file: example.spec.ts

// Playwright configuration file (playwright.config.ts)
// This file contains the configuration settings for Playwright tests.
// Example configuration settings:
// import { defineConfig } from '@playwright/test';
// export default defineConfig({
//   testDir: './tests',
//   timeout: 30000,
//   use: {
//     headless: true,
//     viewport: { width: 1280, height: 720 },
//   },
// });
// Browser projects in playwright config file
// Playwright allows us to define multiple projects in the configuration file.
// Each project can have its own settings, such as browser type, viewport size, etc.
// Running tests on chrome browser with headless mode off
// import { defineConfig, devices } from '@playwright/test';
// export default defineConfig({
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'], headless: false },
//     },
//   ],
// });

// configure html reporters in playwright config file
// Playwright allows us to configure multiple reporters to generate test reports in different formats.
// Example configuration for HTML and JSON reporters:
// import { defineConfig } from '@playwright/test';
// export default defineConfig({
//   reporter: [['html', { outputFolder: 'reports/html' }], ['json', { outputFile: 'reports/report.json' }]],
// });
// configure video recording in playwright config file
// Playwright allows us to record videos of test runs for debugging purposes.
// Example configuration for video recording:
// import { defineConfig } from '@playwright/test';
// export default defineConfig({
//   use: {
//     video: 'on-first-retry',
//   },
// });