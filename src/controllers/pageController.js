import asyncHandler from "express-async-handler";


const getLoginPage = asyncHandler(async (req, res) => {
    res.render("login");
});

const getRegisterPage = asyncHandler(async (req, res) => {
    res.render("register");
});

const getTasksPage = asyncHandler(async (req, res) => {
    res.render("tasks");
});

const getUserProfilePage = asyncHandler(async (req, res) => {
    res.status(200).render("profile", {
        user: req.user,
    });
});


export {getLoginPage, getRegisterPage, getTasksPage, getUserProfilePage};