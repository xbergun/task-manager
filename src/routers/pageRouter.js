//? Modules
import express from "express";

//? Controllers
import {
  getLoginPage,
  getRegisterPage,
  getTasksPage,
  getUserProfilePage,
  forgotPasswordPage
} from "../controllers/pageController.js";
import checkAccessToRoute from "../middlewares/auth.js";

//? Middlewares

const router = express.Router();

//? Routes

router.get("/", getLoginPage);

router.get("/register", getRegisterPage);

router.get("/tasks", checkAccessToRoute,getTasksPage);

router.get("/profile", checkAccessToRoute, getUserProfilePage);

router.get('/forgot-password', forgotPasswordPage);

export default router;
