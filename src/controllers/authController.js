import express from "express";
import asyncHandler from "express-async-handler";
import User  from "../models/User.js";
const getLoginPage = asyncHandler(async (req, res) => {
  res.render("login");
});


export { getLoginPage };