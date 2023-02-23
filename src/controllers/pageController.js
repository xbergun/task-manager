import asyncHandler from "express-async-handler";
import Task from "../Models/Task.js";

const getLoginPage = asyncHandler(async (req, res) => {
    res.render("login");
});

const getRegisterPage = asyncHandler(async (req, res) => {
    res.render("register");
});

const getTasksPage = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).render("tasks",{
        user: req.user,
        tasks,
    });
});

const getUserProfilePage = asyncHandler(async (req, res) => {
    res.status(200).render("profile", {
        user: req.user,
    });
});

const forgotPasswordPage = asyncHandler(async (req, res) => {
    res.status(200).render("forgot_password");
});


export {getLoginPage, getRegisterPage, getTasksPage, getUserProfilePage, forgotPasswordPage};