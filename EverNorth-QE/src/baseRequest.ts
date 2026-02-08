//  API Key Authentication

// **API keys in headers or query parameters.**

// **Header-based API key:**
// ```typescript
// test('API key in header', async ({ request }) => {
//   const apiKey = process.env.API_KEY || 'your-api-key';
  
//   const response = await request.get('https://api.example.com/data', {
//     headers: {
//       'X-API-Key': apiKey,
//       // or
//       'Authorization': `ApiKey ${apiKey}`,
//     },
//   });
  
//   expect(response.status()).toBe(200);
// });
// ```

// **Query parameter API key:**
// ```typescript
// test('API key in query param', async ({ request }) => {
//   const apiKey = process.env.API_KEY || 'your-api-key';
  
//   const response = await request.get('https://api.example.com/data', {
//     params: {
//       api_key: apiKey,
//       // or
//       apikey: apiKey,
//     },
//   });
  
//   expect(response.status()).toBe(200);
// });
// ```

// **Configure API context with key:**
// ```typescript
// const test = base.extend({
//   apiContext: async ({ playwright }, use) => {
//     const context = await playwright.request.newContext({
//       baseURL: 'https://api.example.com',
//       extraHTTPHeaders: {
//         'X-API-Key': process.env.API_KEY || 'test-key',
//       },
//     });
    
//     await use(context);
//     await context.dispose();
//   },
// });
// ```

// Create base request test with API key authentication
import { test as base, APIRequestContext } from '@playwright/test';

export const BaseRequestTest = base.extend<{ apiRequest: APIRequestContext }>({
    apiRequest: async ({ playwright }, use) => {
        const apiKey = process.env.API_KEY || 'your-api-key';
        const apiRequestContext = await playwright.request.newContext({
            baseURL: 'https://api.example.com',
            extraHTTPHeaders: {
                'X-API-Key': apiKey
            },
        });
        await use(apiRequestContext);
        await apiRequestContext.dispose();
    },
});

// Usage in tests:
// import { BaseRequestTest as test, expect } from './baseRequest';
// test('API key authenticated request', async ({ apiRequest }) => {
//   const response = await apiRequest.get('/data');
//   expect(response.status()).toBe(200);
// });

// **Note:** Replace `'https://api.example.com'` and header names with actual API details.
// **Ensure to set the `API_KEY` environment variable before running tests.**
// **This setup allows secure and flexible API key authentication in Playwright tests.**
// **API Key Authentication**

// **API keys in headers or query parameters.**
// **Header-based API key:**
// ```typescript
// test('API key in header', async ({ request }) => {
//   const apiKey = process.env.API_KEY || 'your-api-key';
  
//   const response = await request.get('https://api.example.com/data', {
//     headers: {
//       'X-API-Key': apiKey
//       // or
//       'Authorization': `ApiKey ${apiKey}`,
//     },
//   });
