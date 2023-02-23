//? Modules
import express from "express";

//? Controllers
import {
  getLoginPage,
  getRegisterPage,
  getTasksPage,
  getUserProfilePage,
} from "../controllers/pageController.js";
import checkAccessToRoute from "../middlewares/auth.js";

//? Middlewares

const router = express.Router();

//? Routes

router.get("/", getLoginPage);

router.get("/register", getRegisterPage);

router.get("/tasks", checkAccessToRoute,getTasksPage);

router.get("/profile", checkAccessToRoute, getUserProfilePage);

export default router;
