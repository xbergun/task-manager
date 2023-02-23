import User from "../Models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import {sendJwtToClient} from '../helpers/auth/tokenHelpers.js';
import { comparePasswords, validateUserInput } from "../helpers/inputHelpers.js";

const addUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

 sendJwtToClient(user, res)

});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!validateUserInput(email, password)) {
    return res.status(400).json({
      success: false,
      message: "Please check your inputs",
    });
  }

  const user = await User.findOne({ email }).select("+password");


  if (!user || !comparePasswords(password, user.password) ) {
    return res.status(400).json({
      success: false,
      message: "Please check your credentials",
    });  
  }
  sendJwtToClient(user, res, "/tasks");
  

});

export { addUser, loginUser };
