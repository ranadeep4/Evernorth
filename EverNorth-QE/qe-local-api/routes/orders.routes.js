import express from "express";

const createOrdersRouter = ({
  sendSuccess,
  sendError,
  methodNotAllowed,
  parseId,
  orders,
  users,
  products,
  getNextOrderId,
  authMiddleware,
}) => {
  const router = express.Router();

  router.get("/", authMiddleware, (req, res) => {
    sendSuccess(res, 200, "Orders retrieved", {
      count: orders.length,
      orders,
    });
  });

  router.post("/", authMiddleware, (req, res) => {
    const { userId, productIds } = req.body || {};
    const parsedUserId = parseId(userId);
    if (!parsedUserId) {
      return sendError(
        res,
        400,
        "Valid userId is required",
        "VALIDATION_ERROR"
      );
    }
    if (!Array.isArray(productIds) || productIds.length === 0) {
      return sendError(
        res,
        400,
        "productIds must be a non-empty array",
        "VALIDATION_ERROR"
      );
    }

    const user = users.find((item) => item.id === parsedUserId);
    if (!user) {
      return sendError(res, 404, "User not found", "NOT_FOUND");
    }

    const normalizedProductIds = productIds
      .map((id) => parseId(id))
      .filter((id) => id !== null);

    if (normalizedProductIds.length !== productIds.length) {
      return sendError(
        res,
        400,
        "productIds must contain valid ids",
        "VALIDATION_ERROR"
      );
    }

    const orderProducts = products.filter((item) =>
      normalizedProductIds.includes(item.id)
    );
    if (orderProducts.length !== normalizedProductIds.length) {
      return sendError(res, 404, "Product not found", "NOT_FOUND");
    }

    const total = orderProducts.reduce((sum, item) => sum + item.price, 0);
    const newOrder = {
      id: getNextOrderId(),
      userId: parsedUserId,
      productIds: normalizedProductIds,
      total,
      createdAt: new Date().toISOString(),
    };
    orders.push(newOrder);
    console.log("Order created:", newOrder);
    sendSuccess(res, 201, "Order created", { order: newOrder });
  });

  router.all("/", methodNotAllowed(["GET", "POST"]));

  return router;
};

export default createOrdersRouter;
