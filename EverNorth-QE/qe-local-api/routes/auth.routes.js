import express from "express";

const createAuthRouter = ({ sendSuccess, sendError, methodNotAllowed, token }) => {
  const router = express.Router();

  router.post("/login", (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return sendError(
        res,
        400,
        "Username and password are required",
        "VALIDATION_ERROR"
      );
    }

    if (username !== "admin" || password !== "password123") {
      return sendError(res, 401, "Invalid credentials", "UNAUTHORIZED");
    }

    sendSuccess(res, 200, "Login successful", {
      token: `Bearer ${token}`,
      expiresIn: "1h",
    });
  });

  router.all("/login", methodNotAllowed(["POST"]));

  return router;
};

export default createAuthRouter;
