import express from 'express';
import { getAllTasks ,addNewTask,updateTask,deleteTask} from '../controllers/tasksController.js';
import {checkTaskExits} from '../middlewares/checkExits.js';
const router = express.Router();

router.get('/',getAllTasks);
router.post('/add-task', addNewTask)
router.put('/update-task/:id',checkTaskExits, updateTask)
router.delete('/delete-task/:id',deleteTask)

export default router;