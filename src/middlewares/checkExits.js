import asyncHandler from "express-async-handler";
import Task from "../models/Task.js";
import customErrorHandler from "../helpers/Error/CustomErrorHandler.js";
const checkTaskExits = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return next(customErrorHandler.notFound("Task not found"));
  }

  req.task = task;

  next()
});


export {checkTaskExits};