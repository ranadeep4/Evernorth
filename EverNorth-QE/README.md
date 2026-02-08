## EverNorth-QE

Quality engineering training repository with Playwright tests, API samples, and
TypeScript/JavaScript examples.

### Getting Started

1. Install dependencies:
   `npm install`

2. Run the local API server (used by API tests):
   `npm run start:qe-api`

3. Run Playwright tests:
   `npx playwright test`

### Project Structure

- `tests/` Playwright test specs
- `src/` Page objects and data utilities
- `qe-local-api/` Local Express API used for test data
- `JSSamples/` JavaScript samples
- `TSSamples/` TypeScript samples

### Notes

- Playwright configuration is in `playwright.config.ts`.
- The local API server is implemented in `qe-local-api/server.js`.
