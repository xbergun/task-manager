//? Modules
import express from 'express';

//? Controllers
import { addUser, loginUser,logoutUser,forgotPassword } from '../controllers/userController.js';
import checkAccessToRoute from './../middlewares/auth.js';


const router = express.Router();

//? Routes
router.post('/adduser', addUser);
router.post('/login', loginUser);
router.get('/logout', checkAccessToRoute, logoutUser);
router.post('/forgot-password', forgotPassword);

export default router;