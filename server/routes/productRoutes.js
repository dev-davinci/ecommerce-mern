import express from "express";
import {
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";

const router = express.Router();
// desc: GETS ALL PRODUCTS
// route: GET /api/products
// access: PUBLIC

router.get("/", getAllProducts);

// desc: GETS ONE PRODUCT
// route: GET /api/products/:id
// access: PUBLIC

router.get("/:id", getProduct);

export default router;
