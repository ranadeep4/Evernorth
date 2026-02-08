import express from "express";
import cors from "cors";
import createAuthRouter from "./routes/auth.routes.js";
import createUsersRouter from "./routes/users.routes.js";
import createProductsRouter from "./routes/products.routes.js";
import createOrdersRouter from "./routes/orders.routes.js";
import createAuthMiddleware from "./middleware/auth.middleware.js";
import { users, getNextUserId } from "./data/users.data.js";
import { products, getNextProductId } from "./data/products.data.js";
import { orders, getNextOrderId } from "./data/orders.data.js";

const app = express();
const PORT = 3000;
const FAKE_TOKEN = "fake-token-12345";

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const startTime = Date.now();
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`
  );
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Body:", req.body);
  }
  res.on("finish", () => {
    console.log(
      `Responded ${res.statusCode} in ${Date.now() - startTime}ms`
    );
  });
  next();
});

const sendSuccess = (res, status, message, data = null) =>
  res.status(status).json({ success: true, message, data });

const sendError = (res, status, message, code, details = null) =>
  res.status(status).json({
    success: false,
    message,
    error: { code, details },
  });

const methodNotAllowed =
  (allowed) =>
  (req, res) =>
    sendError(res, 405, `Method ${req.method} not allowed`, "METHOD_NOT_ALLOWED", {
      allowed,
    });

const parseId = (value) => {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
};

const authMiddleware = createAuthMiddleware({
  token: FAKE_TOKEN,
  sendError,
});

app.get("/health", (req, res) => {
  sendSuccess(res, 200, "API is healthy", {
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});
app.all("/health", methodNotAllowed(["GET"]));

app.use(
  "/auth",
  createAuthRouter({
    sendSuccess,
    sendError,
    methodNotAllowed,
    token: FAKE_TOKEN,
  })
);

app.use(
  "/users",
  createUsersRouter({
    sendSuccess,
    sendError,
    methodNotAllowed,
    parseId,
    users,
    getNextUserId,
  })
);

app.use(
  "/products",
  createProductsRouter({
    sendSuccess,
    sendError,
    methodNotAllowed,
    products,
    getNextProductId,
  })
);

app.use(
  "/orders",
  createOrdersRouter({
    sendSuccess,
    sendError,
    methodNotAllowed,
    parseId,
    orders,
    users,
    products,
    getNextOrderId,
    authMiddleware,
  })
);

app.get("/errors/unauthorized", (req, res) => {
  sendError(res, 401, "Unauthorized error simulation", "UNAUTHORIZED");
});
app.all("/errors/unauthorized", methodNotAllowed(["GET"]));

app.get("/errors/forbidden", (req, res) => {
  sendError(res, 403, "Forbidden error simulation", "FORBIDDEN");
});
app.all("/errors/forbidden", methodNotAllowed(["GET"]));

app.get("/errors/server-error", (req, res) => {
  sendError(res, 500, "Server error simulation", "SERVER_ERROR");
});
app.all("/errors/server-error", methodNotAllowed(["GET"]));

app.use((req, res) => {
  sendError(res, 404, "Route not found", "NOT_FOUND", {
    path: req.originalUrl,
  });
});

app.listen(PORT, () => {
  console.log(`QE Local API running on http://localhost:${PORT}`);
});
