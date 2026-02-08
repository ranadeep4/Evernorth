# QE Local API (Training)

Local REST API for QA automation practice. Uses in-memory data and resets on
server restart.

## What this API does

This API simulates a simple e-commerce backend so students can practice:

- Authentication and token usage
- CRUD operations for users
- Products listing and creation
- Protected order creation and retrieval
- Error handling with realistic HTTP codes
- API chaining across multiple endpoints

All data is stored in memory, so every server restart resets users, products,
and orders to their defaults.

## What we have automated

The examples in this README show how to automate:

- Logging in to get a bearer token
- Using that token to call protected endpoints
- Creating and validating orders via API chaining

This repo already includes Playwright and Cypress training projects. This API
is designed to be used by those tests without adding another package.json.

## Setup

From the repository root:

1. Install dependencies
   ```
   npm install
   ```
2. Start the API
   ```
   npm run start:qe-api
   ```

Server runs on `http://localhost:3000`.

## Sample curl commands

Health:
```
curl http://localhost:3000/health
```

Login (returns token):
```
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"admin\",\"password\":\"password123\"}"
```

Users:
```
curl http://localhost:3000/users

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Jane Doe\",\"email\":\"jane@example.com\"}"

curl http://localhost:3000/users/1

curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Jane Updated\"}"

curl -X DELETE http://localhost:3000/users/1
```

Products:
```
curl http://localhost:3000/products

curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Keyboard\",\"price\":99.99}"
```

Orders (protected):
```
curl http://localhost:3000/orders \
  -H "Authorization: Bearer fake-token-12345"

curl -X POST http://localhost:3000/orders \
  -H "Authorization: Bearer fake-token-12345" \
  -H "Content-Type: application/json" \
  -d "{\"userId\":1,\"productIds\":[1,2]}"
```

Error simulation:
```
curl http://localhost:3000/errors/unauthorized
curl http://localhost:3000/errors/forbidden
curl http://localhost:3000/errors/server-error
```

## Playwright API example

```
import { test, expect } from "@playwright/test";

test("login and create order", async ({ request }) => {
  const login = await request.post("http://localhost:3000/auth/login", {
    data: { username: "admin", password: "password123" },
  });
  expect(login.ok()).toBeTruthy();
  const { data } = await login.json();

  const order = await request.post("http://localhost:3000/orders", {
    data: { userId: 1, productIds: [1, 2] },
    headers: { Authorization: data.token },
  });
  expect(order.status()).toBe(201);
});
```

## Cypress API example

```
describe("login and create order", () => {
  it("creates an order", () => {
    cy.request("POST", "http://localhost:3000/auth/login", {
      username: "admin",
      password: "password123",
    }).then((login) => {
      expect(login.status).to.eq(200);
      const token = login.body.data.token;

      cy.request({
        method: "POST",
        url: "http://localhost:3000/orders",
        headers: { Authorization: token },
        body: { userId: 1, productIds: [1, 2] },
      }).then((order) => {
        expect(order.status).to.eq(201);
      });
    });
  });
});
```
