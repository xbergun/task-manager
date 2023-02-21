import asyncHandler from "express-async-handler";


const getLoginPage = asyncHandler(async (req, res) => {
    res.render("login");
});

const getRegisterPage = asyncHandler(async (req, res) => {
    res.render("register");
});

const getTasksPage = asyncHandler(async (req, res) => {
    res.render("home");
});


export {getLoginPage, getRegisterPage, getTasksPage};