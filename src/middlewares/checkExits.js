// Modules
import asyncHandler from "express-async-handler";

// Models
import Task from "../models/Task.js";

// Helpers
import customErrorHandler from "../helpers/Error/CustomErrorHandler.js";

//? Check if task exists in database or not and if it exists then add it to req.task and pass it to next middleware or controller
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