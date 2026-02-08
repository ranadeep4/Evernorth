const createAuthMiddleware = ({ token, sendError }) => (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  if (authHeader !== `Bearer ${token}`) {
    return sendError(
      res,
      401,
      "Invalid or missing token",
      "UNAUTHORIZED",
      {
        hint: "Use Authorization: Bearer <token> from /auth/login",
      }
    );
  }
  next();
};

export default createAuthMiddleware;
