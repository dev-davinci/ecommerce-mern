import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getAllUsers,
} from "./../controllers/userController.js";
import { protect, Admin } from "./../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, Admin, getAllUsers);

router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
