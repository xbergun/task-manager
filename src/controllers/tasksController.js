//? Modules
import asyncErrorHandler from "express-async-handler";

//? Models
import Task from "../models/Task.js";
import User from "../models/User.js";
// Controllers functions

const addNewTask = asyncErrorHandler(async (req, res, next) => {
    const {title} = req.body;
    const {id} = req.user;

    const task = await Task.create({
        title,
        user: id
    });

    return res.status(201).json({success: true, msg: "Task created", task: task});

  
});

const updateTask = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, done } = req.body;
  const task = await Task.findById(id);
  task.title = title ? title : task.title;
  task.description = description ? description : task.description;
  task.done = done;
  await task.save();
  return res
    .status(200)
    .json({ success: true, msg: "Task updated", task: task });
});

const deleteTask = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ success: false, msg: "Task not found" });
  }
  await task.remove();
  return res
    .status(200)
    .json({ success: true, msg: "Task deleted", task: task });
});

export {addNewTask, updateTask, deleteTask };
