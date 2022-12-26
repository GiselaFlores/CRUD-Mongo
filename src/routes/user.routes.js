import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/api/v1/users", getUsers);
router.get("/api/v1/users/:email", getUserByEmail);
router.post("/api/v1/users", createUser);
router.put("/api/v1/users/:email", updateUser);
router.delete("/api/v1/users/:email", deleteUser);

export default router;
