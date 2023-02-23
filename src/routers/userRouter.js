//? Modules
import express from 'express';

//? Controllers
import { addUser, loginUser } from '../controllers/userController.js';
import checkAccessToRoute from './../middlewares/auth.js';


const router = express.Router();

//? Routes
router.post('/adduser', addUser);
router.post('/login', loginUser);

export default router;