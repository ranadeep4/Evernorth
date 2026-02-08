import express from "express";

const createProductsRouter = ({
  sendSuccess,
  sendError,
  methodNotAllowed,
  products,
  getNextProductId,
}) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    sendSuccess(res, 200, "Products retrieved", {
      count: products.length,
      products,
    });
  });

  router.post("/", (req, res) => {
    const { name, price } = req.body || {};
    if (!name || price === undefined) {
      return sendError(
        res,
        400,
        "Name and price are required",
        "VALIDATION_ERROR"
      );
    }
    const parsedPrice = Number(price);
    if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
      return sendError(
        res,
        400,
        "Price must be a non-negative number",
        "VALIDATION_ERROR"
      );
    }
    const newProduct = { id: getNextProductId(), name, price: parsedPrice };
    products.push(newProduct);
    console.log("Product created:", newProduct);
    sendSuccess(res, 201, "Product created", { product: newProduct });
  });

  router.all("/", methodNotAllowed(["GET", "POST"]));

  return router;
};

export default createProductsRouter;
