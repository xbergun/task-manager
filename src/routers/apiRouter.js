import express from 'express';
import User from '../Models/User.js';
import Task from '../Models/Task.js';
import checkAccessToRoute from './../middlewares/auth.js';
const router = express.Router();


router.get('/allusers', async(req, res) => {
    const users = await User.find();
    return res.status(200).json({message: "All users", users: users});
});

router.get('/alltasks', async(req, res) => {
    const tasks = await Task.find();
    return res.status(200).json({message: "All tasks", tasks: tasks});
});

router.get('/tokentest', checkAccessToRoute,async(req, res) => {
    return res.status(200).json({message: "Token test"});
});

export default router;