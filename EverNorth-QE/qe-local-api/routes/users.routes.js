import express from "express";

const createUsersRouter = ({
  sendSuccess,
  sendError,
  methodNotAllowed,
  parseId,
  users,
  getNextUserId,
}) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    sendSuccess(res, 200, "Users retrieved", {
      count: users.length,
      users,
    });
  });

  router.post("/", (req, res) => {
    const { name, email } = req.body || {};
    if (!name || !email) {
      return sendError(
        res,
        400,
        "Name and email are required",
        "VALIDATION_ERROR"
      );
    }

    const newUser = { id: getNextUserId(), name, email };
    users.push(newUser);
    console.log("User created:", newUser);
    sendSuccess(res, 201, "User created", { user: newUser });
  });

  router.all("/", methodNotAllowed(["GET", "POST"]));

  router.get("/:id", (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
      return sendError(res, 400, "Invalid user id", "VALIDATION_ERROR");
    }
    const user = users.find((item) => item.id === id);
    if (!user) {
      return sendError(res, 404, "User not found", "NOT_FOUND");
    }
    sendSuccess(res, 200, "User retrieved", { user });
  });

  router.put("/:id", (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
      return sendError(res, 400, "Invalid user id", "VALIDATION_ERROR");
    }
    const user = users.find((item) => item.id === id);
    if (!user) {
      return sendError(res, 404, "User not found", "NOT_FOUND");
    }
    const { name, email } = req.body || {};
    if (!name && !email) {
      return sendError(
        res,
        400,
        "Provide name or email to update",
        "VALIDATION_ERROR"
      );
    }
    if (name) user.name = name;
    if (email) user.email = email;
    console.log("User updated:", user);
    sendSuccess(res, 200, "User updated", { user });
  });

  router.delete("/:id", (req, res) => {
    const id = parseId(req.params.id);
    if (!id) {
      return sendError(res, 400, "Invalid user id", "VALIDATION_ERROR");
    }
    const index = users.findIndex((item) => item.id === id);
    if (index === -1) {
      return sendError(res, 404, "User not found", "NOT_FOUND");
    }
    const [removed] = users.splice(index, 1);
    console.log("User deleted:", removed);
    sendSuccess(res, 200, "User deleted", { user: removed });
  });

  router.all("/:id", methodNotAllowed(["GET", "PUT", "DELETE"]));

  return router;
};

export default createUsersRouter;
