import { test, expect } from "@playwright/test";

// Allow running against a custom API host if needed.
const baseURL = process.env.QE_API_URL || "http://localhost:3000";

// Using environment variable QE_API_URL allows testing against different instances.
// creating env variable in terminal:
// export QE_API_URL="http://custom-api-host:port"
// playwright test command with env variable:
// QE_API_URL="http://custom-api-host:port" npx playwright test tests/qe-api.spec.ts
// Creating env file .env with content:
// QE_API_URL="http://custom-api-host:port"
// and running with:
// npx playwright test --env-file=.env tests/qe-api.spec.ts

// Using dotenv package to load environment variables from a .env file
// Uncomment the following lines if you want to use dotenv directly in this file
// import * as dotenv from 'dotenv';
// dotenv.config();
// Now process.env.QE_API_URL will be populated from the .env file if it exists

test.describe.serial("QE Local API", () => {
  test("health endpoint returns status", async ({ request }) => {
    // Basic availability check for the API.
    const response = await request.get(`${baseURL}/health`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.success).toBeTruthy();
    expect(body.data.status).toBe("ok");
  });

  test("login success and invalid credentials", async ({ request }) => {
    // Verify valid credentials return a bearer token.
    const success = await request.post(`${baseURL}/auth/login`, {
      data: { username: "admin", password: "password123" },
    });
    expect(success.status()).toBe(200);

    const successBody = await success.json();
    expect(successBody.data.token).toContain("Bearer");

    // Invalid credentials should return 401.
    const invalid = await request.post(`${baseURL}/auth/login`, {
      data: { username: "admin", password: "wrong" },
    });
    expect(invalid.status()).toBe(401);
  });

  test("users CRUD flow", async ({ request }) => {
    // Create a user and capture the generated id for chaining.
    const create = await request.post(`${baseURL}/users`, {
      data: { name: "QA Student", email: "qa.student@example.com" },
    });
    expect(create.status()).toBe(201);
    const created = await create.json();
    const userId = created.data.user.id;

    // Read and verify created user.
    const getUser = await request.get(`${baseURL}/users/${userId}`);
    expect(getUser.status()).toBe(200);
    const fetched = await getUser.json();
    expect(fetched.data.user.email).toBe("qa.student@example.com");

    // Update the user and verify status.
    const update = await request.put(`${baseURL}/users/${userId}`, {
      data: { name: "QA Student Updated" },
    });
    expect(update.status()).toBe(200);

    // Delete the user and confirm the record is gone.
    const remove = await request.delete(`${baseURL}/users/${userId}`);
    expect(remove.status()).toBe(200);

    const afterDelete = await request.get(`${baseURL}/users/${userId}`);
    expect(afterDelete.status()).toBe(404);
  });

  test("products list and create", async ({ request }) => {
    // List products and create a new one.
    const list = await request.get(`${baseURL}/products`);
    expect(list.status()).toBe(200);

    const create = await request.post(`${baseURL}/products`, {
      data: { name: "Test Mouse", price: 49.99 },
    });
    expect(create.status()).toBe(201);
    const created = await create.json();
    expect(created.data.product.name).toBe("Test Mouse");
  });

  test("orders require auth and support chaining", async ({ request }) => {
    // Orders should reject requests without a token.
    const unauthorized = await request.get(`${baseURL}/orders`);
    expect(unauthorized.status()).toBe(401);

    // Login to obtain token for protected calls.
    const login = await request.post(`${baseURL}/auth/login`, {
      data: { username: "admin", password: "password123" },
    });
    const { data } = await login.json();

    // Create an order with the token, then verify listing works.
    const createOrder = await request.post(`${baseURL}/orders`, {
      data: { userId: 1, productIds: [1, 2] },
      headers: { Authorization: data.token },
    });
    expect(createOrder.status()).toBe(201);

    const orders = await request.get(`${baseURL}/orders`, {
      headers: { Authorization: data.token },
    });
    expect(orders.status()).toBe(200);
  });

  test("error simulation endpoints return correct status", async ({
    request,
  }) => {
    const unauthorized = await request.get(`${baseURL}/errors/unauthorized`);
    expect(unauthorized.status()).toBe(401);

    const forbidden = await request.get(`${baseURL}/errors/forbidden`);
    expect(forbidden.status()).toBe(403);

    const serverError = await request.get(`${baseURL}/errors/server-error`);
    expect(serverError.status()).toBe(500);
  });

  test("reject unsupported methods with 405", async ({ request }) => {
    // Unsupported verbs should return a 405.
    const response = await request.put(`${baseURL}/products`, {
      data: { name: "Invalid", price: 1 },
    });
    expect(response.status()).toBe(405);
  });

  // create a test to velidate schema of /products response
  test("products response schema validation", async ({ request }) => {
    const response = await request.get(`${baseURL}/products`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    // create json object test schema for product
    let productSchema = {
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(Number)
    };
    // Validate each product against the schema
    let products = body.data.products;
    for (let product of products) {
      console.log(product);
      expect(product).toMatchObject(productSchema);
    }

  });
});
