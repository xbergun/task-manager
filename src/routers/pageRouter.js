//? Modules
import express from "express";

//? Controllers
import {
  getLoginPage,
  getRegisterPage,
  getTasksPage,
} from "../controllers/pageController.js";

//? Middlewares

const router = express.Router();

//? Routes

router.get("/", getLoginPage);

router.get("/register", getRegisterPage);

router.get("/tasks", getTasksPage);

export default router;
