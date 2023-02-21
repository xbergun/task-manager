//? Modules
import express from 'express';

//? Controllers
import {addNewTask,updateTask,deleteTask} from '../controllers/tasksController.js';

//? Middlewares
import {checkTaskExits} from '../middlewares/checkExits.js';


const router = express.Router();

//? Routes

router.post('/add-task', addNewTask)
router.put('/update-task/:id',checkTaskExits, updateTask)
router.delete('/delete-task/:id',deleteTask)

export default router;