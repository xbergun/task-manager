//? Modules
import express from 'express';

//? Controllers
import {addNewTask,updateTask,deleteTask} from '../controllers/tasksController.js';
import checkAccessToRoute from '../middlewares/auth.js';

//? Middlewares



const router = express.Router();

//? Routes

router.post('/add-task', checkAccessToRoute,addNewTask)
router.get('/delete/:id', checkAccessToRoute,deleteTask)


export default router;