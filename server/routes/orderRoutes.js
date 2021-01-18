import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, getOrders);
router.route("/myorders").get(protect, getMyOrders);

router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").get(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, updateOrderToDelivered);

export default router;
