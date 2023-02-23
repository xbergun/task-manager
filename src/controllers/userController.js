import User from "../Models/User.js";
import asyncErrorWrapper from "express-async-handler";
import { sendJwtToClient } from "../helpers/auth/tokenHelpers.js";
import {
  comparePasswords,
  validateUserInput,
} from "../helpers/inputHelpers.js";

const addUser = asyncErrorWrapper(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  sendJwtToClient(user, res, "/");
});

const loginUser = asyncErrorWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!validateUserInput(email, password)) {
    return res.status(400).json({
      success: false,
      message: "Please check your inputs",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !comparePasswords(password, user.password)) {
    return res.status(400).json({
      success: false,
      message: "Please check your credentials",
    });
  }
  sendJwtToClient(user, res, "/tasks");
});

const logoutUser = asyncErrorWrapper(async (req, res) => {
  res.cookie("access_token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  return res.status(200).redirect("/");


});

export { addUser, loginUser, logoutUser };
