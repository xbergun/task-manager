import express from 'express';
import User from '../Models/User.js';
import Task from '../Models/Task.js';
const router = express.Router();


router.get('/allusers', async(req, res) => {
    const users = await User.find();
    return res.status(200).json({message: "All users", users: users});
});

router.get('/alltasks', async(req, res) => {
    const tasks = await Task.find();
    return res.status(200).json({message: "All tasks", tasks: tasks});
});

export default router;